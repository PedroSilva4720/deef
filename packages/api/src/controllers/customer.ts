import { Request, Response } from 'express';
import { CustomerModel } from '../models/customer';

export class CustomerControllers {
  constructor() {}
  async create(req: Request, res: Response) {
    const { name, email, phone } = req.body;

    const { company } = req.params;

    try {
      const Model = new CustomerModel();

      Object.assign(Model, {
        name,
        email,
        phone,
        companyId: company,
      });

      const { status, message } = await Model.create();

      return res.status(status).json({ message });
    } catch (error) {
      throw new Error(error);
    }
  }
}
