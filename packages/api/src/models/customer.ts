import { CustomerRepository } from '../repositories/customer';

export class CustomerModel {
  id: string;
  name: string;
  email: string;
  phone: string;
  createdAt: Date;
  postId: string;
  discountTokenId: string;
  companyId: string;
  constructor() {
    this.createdAt = new Date();
  }
  async create() {
    const Repository = new CustomerRepository();

    if (await Repository.verifyIfExistsCompany(this.companyId)) {
      await Repository.create(
        this.name,
        this.email,
        this.phone,
        this.createdAt,
        this.companyId
      );

      return { status: 201, message: 'Criado com sucesso!' };
    }
    return { status: 400, message: 'Id desconhecido' };
  }
}
