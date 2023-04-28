import express, { NextFunction, Request, Response } from 'express';
import cors from 'cors';
import swaggerUi from 'swagger-ui-express';
import * as dotenv from 'dotenv';

import swaggerDocument from './swagger.json';
import { userRouter } from './routes/user/user';
import { questRouter } from './routes/quest';
import { CompanyRouter } from './routes/company/company';
import { DiscountTokenRouter } from './routes/discountToken';
import { IInternalServerError } from './errors/Errors';
import { CustomerRouter } from './routes/customer';

dotenv.config();

const app = express();

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use(express.json());

app.use(cors());

app.get('/', (req, res) => {
  res.json({ message: 'test' });
});

app.use('/user', userRouter);
app.use('/quest', questRouter);
app.use('/company', CompanyRouter);
app.use('/customer', CustomerRouter);
app.use('/token', DiscountTokenRouter);

app.use(
  (
    error: IInternalServerError,
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    if (error) {
      return res.json(error.message);
    } else {
      next();
    }
  }
);

export { app };
