import { prisma } from '../prisma';

export class CompanyRepository {
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
  async updateCompanyName(id, newCompanyName, newCompanyUsername) {
    await prisma.company.update({
      where: {
        id,
      },
      data: {
        companyName: newCompanyName,
        companyUsername: newCompanyUsername,
      },
    });
  }
}
