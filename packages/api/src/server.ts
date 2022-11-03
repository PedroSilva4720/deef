import express, { NextFunction, Request, Response } from 'express';
import cors from 'cors';
import { router } from './router';
import swaggerUi from 'swagger-ui-express';
import * as dotenv from 'dotenv';

import swaggerDocument from './swager.json';
import { IInternalServerError } from './errors/Errors';

dotenv.config();

const app = express();

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use(express.json());

app.use(cors());

app.use(router);

app.use(
  (
    error: IInternalServerError,
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    if (error) {
      return res.status(error.statusCode).json(error.message);
    } else {
      next();
    }
  }
);

app.listen(9001);
