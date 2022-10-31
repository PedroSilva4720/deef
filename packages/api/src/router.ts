import { updateUserPassword, updateUserName } from './controllers/user/index';
import { Router } from 'express';
import { createCompany } from './controllers/company';
import { createUserByCompanyId, deleteUser } from './controllers/user';

export const router = Router();

//company routes
router.post('/company', createCompany);

//manager (user) routes
router.post('/user/:companyId', createUserByCompanyId);
router.patch('/user/name/:id', updateUserName);
router.patch('/user/password/:id', updateUserPassword);
router.delete('/user/:id', deleteUser);
