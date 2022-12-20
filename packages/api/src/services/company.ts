import { prisma } from '../prisma';

export class CompanyServices {
  constructor() {}

  async create(companyName, companyUsername) {
    await prisma.company.create({
      data: {
        companyName,
        companyUsername,
        createdAt: new Date(),
      },
    });
  }
  async updateCompanyName(id, newCompanyName) {
    await prisma.company.update({
      where: {
        id,
      },
      data: {
        companyName: newCompanyName,
      },
    });
  }
}
