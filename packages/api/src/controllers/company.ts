import { Request, Response } from 'express';
import { CompanyServices } from '../services/company';

export class CompanyControllers {
  constructor() {}

  async createCompany(req: Request, res: Response) {
    const { companyName } = req.body;

    const Services = new CompanyServices();

    const userName = companyName.toLowerCase().replaceAll(' ', '-');

    try {
      Services.create(companyName, userName);

      return res.status(201).json({ message: 'Criado com sucesso!' });
    } catch (error) {
      throw new Error(error);
    }
  }

  updateCompanyName = async (req: Request, res: Response) => {
    const newCompanyName = req.body;
    const id = req.params.id;

    const Services = new CompanyServices();

    try {
      Services.updateCompanyName(id, newCompanyName);
      return res.status(200).json({ message: 'Nome atualizado com sucesso!' });
    } catch (error) {
      throw new Error(error);
    }
  };
}
