import { Request, Response } from 'express';
import { hash } from 'argon2';

import { prisma } from '../../prisma';
import { credentialsDecoderByBasicAuth } from './services';
import { InternalServerError } from '../../errors/Errors';

export const createUserByCompanyId = async (req: Request, res: Response) => {
  const { name } = req.body;
  const companyId = req.params.companyId;
  const basicAuth = req.headers.authorization;

  const { email, password } = credentialsDecoderByBasicAuth(basicAuth);

  const passwordHash = await hash(password);

  try {
    await prisma.user
      .create({
        data: {
          name,
          email,
          passwordHash,
          createdAt: new Date(),
          companyId,
        },
      })
      .catch(() => res.status(401).json({ message: 'Algo deu errado' }));

    return res.status(201).json({ message: 'Usuário criado com sucesso!' });
  } catch (error) {
    throw new InternalServerError(error);
  }
};

export const updateUserName = async (req: Request, res: Response) => {
  const { newUserName } = req.body;
  const { email } = res.locals.user;

  console.log(newUserName);

  try {
    await prisma.user.update({
      where: {
        email,
      },
      data: {
        name: newUserName,
      },
    });

    return res.json({ message: 'Usuário atualizado com sucesso!' });
  } catch (error) {
    throw new InternalServerError(error);
  }
};

export const updateUserPassword = async (req: Request, res: Response) => {
  const { email, password } = res.locals.user;

  const passwordHash = await hash(password);

  try {
    await prisma.user.update({
      where: {
        email,
      },
      data: {
        passwordHash,
      },
    });

    return res.json({ message: 'Senha atualizada com sucesso!' });
  } catch (error) {
    throw new InternalServerError(error);
  }
};

export const deleteUser = async (req: Request, res: Response) => {
  const { email } = res.locals.user;

  try {
    await prisma.user.delete({
      where: {
        email,
      },
    });

    res.json({ message: 'Usuário excluído com sucesso!' });
  } catch (error) {
    throw new InternalServerError(error);
  }
};
