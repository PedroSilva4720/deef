import { Request, Response, Router } from 'express';
import { createCompany } from './controllers/company';

export const router = Router();

router.get('/', (req: Request, res: Response) => {
  res.send('Olá mundo2');
});

router.post('/company', createCompany);
