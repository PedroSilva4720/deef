import { Router } from 'express';

import * as companyControllers from './controllers/company';
import * as userControllers from './controllers/user';
import * as middlewares from './controllers/user/middleware';

export const router = Router();

//company routes
router.post('/company', companyControllers.createCompany);

//manager (user) routes
router.post('/user/:companyId', userControllers.createUserByCompanyId);
router.patch(
  '/user/name/:id',
  middlewares.userLogin,
  userControllers.updateUserName
);
router.patch(
  '/user/password/:id',
  middlewares.userLogin,
  userControllers.updateUserPassword
);
router.delete('/user/:id', middlewares.userLogin, userControllers.deleteUser);
