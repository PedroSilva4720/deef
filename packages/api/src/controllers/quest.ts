import { Request, Response } from 'express';

import { InternalServerError } from './../errors/Errors';
import { QuestModel } from '../models/quest';

export class QuestControllers {
  constructor() {}

  async updateQuest(req: Request, res: Response) {
    const { id } = req.params;

    const data = req.body;

    try {
      const Model = new QuestModel();
      Model.id = id;

      const { status, message } = Model.update(data);

      return res.status(status).json({ message });
    } catch (error) {
      throw new InternalServerError(error);
    }
  }

  async getQuest(req: Request, res: Response) {
    const { id } = req.params;

    try {
      const Model = new QuestModel();
      Model.id = id;

      const { companyName, lastQuests } = await Model.get();

      return res.json({ companyName, lastQuests });
    } catch (error) {
      throw new InternalServerError(error);
    }
  }
}
