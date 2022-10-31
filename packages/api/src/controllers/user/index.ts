import { Request, Response } from 'express';
import { hash } from 'argon2';

import { prisma } from '../../prisma';
import { credentialsDecoderByBasicAuth } from './services';

export const createUserByCompanyId = async (req: Request, res: Response) => {
  const { name } = req.body;
  const companyId = req.params.companyId;
  const basicAuth = req.headers.authorization;

  const { email, password } = credentialsDecoderByBasicAuth(basicAuth);

  const passwordHash = await hash(password);

  try {
    await prisma.user.create({
      data: {
        name,
        email,
        passwordHash,
        createdAt: new Date(),
        companyId,
      },
    });

    return res.json({ message: 'Usuário criado com sucesso!' });
  } catch (error) {
    throw new Error(error);
  }
};

export const updateUserName = async (req: Request, res: Response) => {
  const { newUserName } = req.body;
  const id = req.params.id;

  try {
    await prisma.user.update({
      where: {
        id,
      },
      data: {
        name: newUserName,
      },
    });

    return res.json({ message: 'Usuário atualizado com sucesso!' });
  } catch (error) {
    throw new Error(error);
  }
};

export const updateUserPassword = async (req: Request, res: Response) => {
  const basicAuth = req.headers.authorization;
  const id = req.params.id;

  const { password } = credentialsDecoderByBasicAuth(basicAuth);

  const passwordHash = await hash(password);

  try {
    await prisma.user.update({
      where: {
        id,
      },
      data: {
        passwordHash,
      },
    });

    return res.json({ message: 'Senha atualizada com sucesso!' });
  } catch (error) {
    throw new Error(error);
  }
};

export const deleteUser = async (req: Request, res: Response) => {
  const id = req.params.id;

  try {
    await prisma.user.delete({
      where: {
        id,
      },
    });

    res.json({ message: 'Usuário excluído com sucesso!' });
  } catch (error) {
    throw new Error(error);
  }
};
