import { Request, Response, Router } from 'express';

export const router = Router();

router.get('/', (req: Request, res: Response) => {
  res.send('Olá mundo');
});
