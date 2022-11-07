import { Router } from 'express';

import * as companyControllers from './controllers/company';
import * as questControllers from './controllers/quest';
import * as userControllers from './controllers/user';
import * as middlewares from './middlewares/middleware';

export const router = Router();

const resolver = handlerFn => (req, res, next) =>
  Promise.resolve(handlerFn(req, res, next)).catch(error => next(error));

//company routes
router.post('/company', resolver(companyControllers.createCompany));

//manager (user) routes
router.get(
  '/user',
  resolver(middlewares.userLogin),
  resolver(middlewares.generateJwt)
);
router.post(
  '/user/:companyId',
  resolver(userControllers.createUserByCompanyId)
);
router.patch(
  '/user/name/:id',
  resolver(middlewares.verifyJwt),
  resolver(userControllers.updateUserName)
);
router.patch(
  '/user/password/:id',
  resolver(middlewares.verifyJwt),
  resolver(userControllers.updateUserPassword)
);
router.delete(
  '/user/:id',
  resolver(middlewares.verifyJwt),
  resolver(userControllers.deleteUser)
);

// quests routes
router.get('/quest/:id', resolver(questControllers.getQuest));
router.post(
  '/quest/:id',
  resolver(middlewares.verifyJwt),
  resolver(questControllers.modifyQuest)
);
