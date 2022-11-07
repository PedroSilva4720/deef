import { NextFunction, Request, Response } from 'express';
import { verify } from 'argon2';
import jwt from 'jsonwebtoken';

import { prisma } from '../prisma';
import { credentialsDecoderByBasicAuth } from '../controllers/user/services';
import { InternalServerError } from '../errors/Errors';

export const userLogin = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
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

    res.locals.user = { email };
    return next();
  } catch (error) {
    throw new InternalServerError(error);
  }
};

export const generateJwt = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const token = jwt.sign(res.locals.user.email, process.env.SECRET);

    return res.send(token);
  } catch (error) {
    throw new InternalServerError(error);
  }
};

export const verifyJwt = (req: Request, res: Response, next: NextFunction) => {
  const params = !!req.params ? req.params : '';

  const token = req.headers.auth;

  try {
    const signed = jwt.verify(`${token}`, process.env.SECRET);

    if (!signed) {
      return res.status(401).send('Falha ao verificar dados.');
    }

    res.locals.user = { params };

    return next();
  } catch (error) {
    throw new InternalServerError(error);
  }
};
