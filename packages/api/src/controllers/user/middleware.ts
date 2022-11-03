import { NextFunction, Request, Response } from 'express';
import { verify } from 'argon2';
import jwt from 'jsonwebtoken';

import { prisma } from '../../prisma';
import { credentialsDecoderByBasicAuth } from './services';
import { InternalServerError } from '../../errors/Errors';

export const userLogin = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const params = !!req.params ? req.params : '';

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

    res.locals.user = { email, password, params };
    return next();
  } catch (error) {
    throw new InternalServerError(error);
  }
};

export const generateJwt = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const token = await jwt.sign(res.locals.user.email, process.env.SECRET);

    res.locals.user.token = token;

    return next();
  } catch (error) {
    throw new InternalServerError(error);
  }
};

export const verifyJwt = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { token } = Object(res.locals.user.params);

  try {
    const signed = await jwt.verify(token, process.env.SECRET);

    if (!signed) {
      return res.status(401).send('Falha ao verificar dados.');
    }

    return next();
  } catch (error) {
    throw new InternalServerError(error);
  }
};

export const authenticateRoot = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const rootUsers = process.env.ROOT_EMAILS.split(' ');
};
