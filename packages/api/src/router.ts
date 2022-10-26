import { updateUserPassowrd, updateUserName } from './controllers/user/index';
import { Request, Response, Router } from 'express';
import { createCompany } from './controllers/company';
import { createUserByCompanyId, deleteUser } from './controllers/user';

export const router = Router();

router.get('/', (req: Request, res: Response) => {
  res.send('Olá mundo2');
});

//company routes
router.post('/company', createCompany);

//manager (user) routes
router.post('/user/:companyId', createUserByCompanyId);
router.patch('/user/name/:id', updateUserName);
router.patch('/user/password/:id', updateUserPassowrd);
router.delete('/user/:id', deleteUser);
