import { prisma } from '../prisma';

export class QuestRepository {
  constructor() {}
  async get(id) {
    const quests = await prisma.quests.findMany({
      where: {
        companyId: id,
      },
      take: -1,
    });

    return quests[0].quests;
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
