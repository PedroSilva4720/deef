import { userLogin } from './../../middlewares/middleware';
import { Request, Response } from 'express';

import { prisma } from '../../prisma';

export const modifyQuest = async (req: Request, res: Response) => {
  const { id } = req.params;

  const data = req.body;

  const a = await prisma.quests.create({
    data: {
      quests: data,
      updatedAt: `${new Date()}`,
      companyId: id,
    },
  });

  return res.status(201).json({ message: 'Atualizado com sucesso' });
};

export const getQuest = async (req: Request, res: Response) => {
  const { id } = req.params;

  const quests = await prisma.quests
    .findMany({
      where: {
        companyId: id,
      },
      take: -1,
    })
    .catch(() => {
      return res.status(501).send();
    });

  return res.json(quests[0].quests);
};
