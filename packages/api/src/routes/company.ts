import { Router } from 'express';
import { resolver } from '../utils';

import { CompanyControllers } from '../controllers/company';

export const CompanyRouter = Router();

const Controllers = new CompanyControllers();

CompanyRouter.post('/company', resolver(Controllers.createCompany));
