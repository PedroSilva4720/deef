import { CustomerControllers } from './../controllers/customer';
import { Router } from 'express';
import { resolver } from '../utils';

export const CustomerRouter = Router();

const Controllers = new CustomerControllers();

CustomerRouter.post('/:company', resolver(Controllers.create));
