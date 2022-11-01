import { NextFunction, Request, Response } from 'express';
import { verify } from 'argon2';

import { prisma } from '../../prisma';
import { credentialsDecoderByBasicAuth } from './services';

export const userLogin = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const id = !!req.params.id ? req.params.id : '';

  const basicAuth = req.headers.authorization;

  const { email, password } = credentialsDecoderByBasicAuth(basicAuth);

  try {
    const user = await prisma.user.findFirst({
      where: {
        email,
      },
    });

    if (!user) {
      return res.status(401).send('Usuário não encontrado.');
    }

    const passwordMatch = await verify(user.passwordHash, password);

    if (!passwordMatch) {
      return res.status(401).send('Senha incorreta.');
    }

    res.locals.user = { email, password, id };
    return next();
  } catch (error) {
    throw new Error(error);
  }
};
