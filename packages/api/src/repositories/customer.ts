import { verify } from 'argon2';
import { prisma } from '../prisma';

export class CustomerRepository {
  constructor() {}
  async create(
    name: string,
    email: string,
    phone: string,
    createdAt: Date,
    companyId: string
  ) {
    await prisma.customer.create({
      data: {
        name,
        email,
        phone,
        createdAt,
        companyId,
      },
    });
  }
  async verifyIfExistsCompany(id: string) {
    const company = await prisma.company.findUnique({
      where: {
        id,
      },
    });

    return !!company;
  }
}
