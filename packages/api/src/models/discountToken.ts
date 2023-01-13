import { DiscountTokenRepository } from '../repositories/discountToken';
import { add, format } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';
import { v1 as uuidv1 } from 'uuid';

export class DiscountTokenModel {
  async create(costumerId: string) {
    const Repository = new DiscountTokenRepository();
    const validatedDate = add(
      new Date(format(new Date(), 'MM/dd/yyyy', { locale: ptBR })),
      {
        months: 1,
      }
    );

    const token = uuidv1().split('-')[0];
    Repository.create(costumerId, token, validatedDate);
  }
}
