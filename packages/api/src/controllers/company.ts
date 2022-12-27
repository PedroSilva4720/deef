import { Request, Response } from 'express';

import { CompanyModel } from './../models/company';

export class CompanyControllers {
  constructor() {}

  async createCompany(req: Request, res: Response) {
    const { companyName } = req.body;

    try {
      const Model = new CompanyModel();

      Model.create(companyName);

      return res.status(201).json({ message: 'Criado com sucesso!' });
    } catch (error) {
      throw new Error(error);
    }
  }

  updateCompanyName = async (req: Request, res: Response) => {
    const newCompanyName = req.body;
    const id = req.params.id;

    try {
      const Model = new CompanyModel();
      Model.id = id;

      Model.updateName(newCompanyName);
      return res.status(200).json({ message: 'Nome atualizado com sucesso!' });
    } catch (error) {
      throw new Error(error);
    }
  };
}
