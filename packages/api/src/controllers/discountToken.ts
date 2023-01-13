import { DiscountTokenModel } from '../models/discountToken';
import { Request, Response } from 'express';

export class DiscountTokenControllers {
  async create(req: Request, res: Response) {
    const costumerId = req.params.CustomerControllers;

    const Model = new DiscountTokenModel();

    Model.create(costumerId);
  }
}
