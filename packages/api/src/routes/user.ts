import { Router } from 'express';

import * as middlewares from '../middlewares/middleware';
import { UserControllers } from '../controllers/user';
import { resolver } from '../utils';

export const userRouter = Router();

const Controllers = new UserControllers();

userRouter.get(
  '/user',
  resolver(middlewares.userLogin),
  resolver(middlewares.generateJwt)
);
userRouter.post(
  '/user/:companyId',
  resolver(Controllers.createUserByCompanyId)
);
userRouter.patch(
  '/user/name/:id',
  resolver(middlewares.verifyJwt),
  resolver(Controllers.updateUserName)
);
userRouter.patch(
  '/user/password/:id',
  resolver(middlewares.verifyJwt),
  resolver(Controllers.updateUserPassword)
);
userRouter.delete(
  '/user/:id',
  resolver(middlewares.verifyJwt),
  resolver(Controllers.deleteUser)
);
