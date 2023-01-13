import { Router } from 'express';
import { DiscountTokenControllers } from '../controllers/discountToken';

export const DiscountTokenRouter = Router();

const Controllers = new DiscountTokenControllers();

DiscountTokenRouter.post('/:costumer', Controllers.create);
