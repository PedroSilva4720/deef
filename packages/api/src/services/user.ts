import { prisma } from '../prisma';

export class UserServices {
  constructor() {}

  async create(name, email, passwordHash, companyId, createdAt) {
    await prisma.user.create({
      data: {
        name,
        email,
        passwordHash,
        createdAt,
        companyId,
      },
    });
  }

  async updateUsername(id, newUserName) {
    console.log('entrou nessa merda');
    await prisma.user.update({
      where: {
        id,
      },
      data: {
        name: newUserName,
      },
    });
  }

  async updatePassword(id, passwordHash) {
    await prisma.user.update({
      where: {
        id,
      },
      data: {
        passwordHash,
      },
    });
  }

  async deleteUser(id) {
    await prisma.user.delete({
      where: {
        id,
      },
    });
  }
}
