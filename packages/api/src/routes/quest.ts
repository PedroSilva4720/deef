import { Router } from 'express';
import { QuestControllers } from '../controllers/quest';

import * as middlewares from '../middlewares/middleware';
import { resolver } from '../utils';

export const questRouter = Router();

const Controllers = new QuestControllers();

questRouter.get('/quest/:id', resolver(Controllers.getQuest));
questRouter.post(
  '/quest/:id',
  resolver(middlewares.verifyJwt),
  resolver(Controllers.modifyQuest)
);
