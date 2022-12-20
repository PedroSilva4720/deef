import { InternalServerError } from './../errors/Errors';
import { userLogin } from './../middlewares/middleware';
import { Request, Response } from 'express';
import { QuestServices } from '../services/quest';

export class QuestControllers {
  constructor() {}

  async modifyQuest(req: Request, res: Response) {
    const { id } = req.params;

    const data = req.body;
    const Service = new QuestServices();

    try {
      Service.modify(data, id);
      return res.status(201).json({ message: 'Atualizado com sucesso' });
    } catch (error) {
      throw new InternalServerError(error);
    }
  }

  async getQuest(req: Request, res: Response) {
    const { id } = req.params;

    const Service = new QuestServices();

    try {
      const lastQuests = await Service.get(id);

      return res.json(lastQuests);
    } catch (error) {
      throw new InternalServerError(error);
    }
  }
}
