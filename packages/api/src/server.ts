import express from 'express';
import cors from 'cors';
import { router } from './router';
import swaggerUi from 'swagger-ui-express';

import swaggerDocument from './swager.json';

const app = express();

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use(express.json());

app.use(cors());

app.use(router);

app.listen(9001);
