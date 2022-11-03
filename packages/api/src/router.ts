import { Router } from 'express';

import * as companyControllers from './controllers/company';
import * as userControllers from './controllers/user';
import * as middlewares from './controllers/user/middleware';

export const router = Router();

const resolver = handlerFn => (req, res, next) =>
  Promise.resolve(handlerFn(req, res, next)).catch(error => next(error));

//company routes
router.post('/company', resolver(companyControllers.createCompany));

//manager (user) routes
router.post(
  '/user/:companyId',
  resolver(userControllers.createUserByCompanyId)
);
router.patch(
  '/user/name/:id',
  resolver(middlewares.userLogin),
  resolver(userControllers.updateUserName)
);
router.patch(
  '/user/password/:id',
  resolver(middlewares.userLogin),
  resolver(userControllers.updateUserPassword)
);
router.delete(
  '/user/:id',
  resolver(middlewares.userLogin),
  resolver(userControllers.deleteUser)
);
