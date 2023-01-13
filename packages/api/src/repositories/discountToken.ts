import { prisma } from '../prisma';

export class DiscountTokenRepository {
  async create(customerId, discountToken, validUntil) {
    await prisma.customer.update({
      where: {
        id: customerId,
      },
      data: {
        discountToken: {
          create: {
            discountToken,
            validUntil,
            used: false,
            usedAt: '',
          },
        },
      },
    });
  }
}
