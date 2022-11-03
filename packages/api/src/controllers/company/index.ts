import { Request, Response } from 'express';
import { prisma } from './../../prisma';

export const createCompany = async (req: Request, res: Response) => {
  const { companyName } = req.body;

  const companyUsername = companyName.toLowerCase().replaceAll(' ', '-');

  try {
    const createdCompany = await prisma.company
      .create({
        data: {
          companyName,
          companyUsername,
          createdAt: new Date(),
        },
      })
      .catch(() => res.status(401).json({ message: 'Algo deu errado.' }));

    return res.send(createdCompany);
  } catch (error) {
    throw new Error(error);
  }
};

export const updateCompanyName = async (req: Request, res: Response) => {
  const newCompanyName = req.body;
  const id = req.params.id;

  try {
    await prisma.company.update({
      where: {
        id,
      },
      data: {
        companyName: newCompanyName,
      },
    });

    return res.status(200).json({ message: 'Nome atualizado com sucesso!' });
  } catch (error) {
    throw new Error(error);
  }
};
