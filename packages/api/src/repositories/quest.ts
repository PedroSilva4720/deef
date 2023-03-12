import { prisma } from '../prisma';

export class QuestRepository {
  constructor() {}
  async get(id) {
    const quests = await prisma.quests.findMany({
      where: {
        companyId: id,
      },
      take: -1,
      select: {
        company: true,
        quests: true,
      },
    });

    return quests[0];
  }

  async update(id, data) {
    await prisma.quests.create({
      data: {
        quests: data,
        updatedAt: `${new Date()}`,
        companyId: id,
      },
    });
  }
}
