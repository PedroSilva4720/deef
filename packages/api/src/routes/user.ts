import { Router } from 'express';

import * as middlewares from '../middlewares/middleware';
import { UserControllers } from '../controllers/user';
import { resolver } from '../utils';

export const userRouter = Router();

const Controllers = new UserControllers();

userRouter.get(
  '/',
  resolver(middlewares.userLogin),
  resolver(middlewares.generateJwt)
);
userRouter.post('/:companyId', resolver(Controllers.createUserByCompanyId));
userRouter.patch(
  '/name/:id',
  resolver(middlewares.verifyJwt),
  resolver(Controllers.updateUserName)
);
userRouter.patch(
  '/password/:id',
  resolver(middlewares.verifyJwt),
  resolver(Controllers.updateUserPassword)
);
userRouter.delete(
  '/:id',
  resolver(middlewares.verifyJwt),
  resolver(Controllers.deleteUser)
);
