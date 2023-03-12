import { QuestRepository } from './../repositories/quest';

interface IQuest {
  name: string;
  type: 'input' | 'select' | 'shortInput' | 'longInput';
  label: string;
  content?: string[];
}

export class QuestModel {
  id: string;
  constructor() {}
  update(newQuests: IQuest[]) {
    function isIQuest(obj: unknown): obj is IQuest[] {
      return (
        obj &&
        typeof obj === 'object' &&
        typeof obj[0]['name'] === 'string' &&
        typeof obj[0]['type'] === 'string' &&
        typeof obj[0]['label'] === 'string'
      );
    }

    if (isIQuest(newQuests)) {
      const Repository = new QuestRepository();

      Repository.update(this.id, newQuests);
    } else {
      return { status: 400, message: 'Formato de dados incorreto!' };
    }

    return { status: 201, message: 'Atualizado com sucesso!' };
  }

  async get() {
    const Repository = new QuestRepository();

    const quest = await Repository.get(this.id);

    return { companyName: quest.company.companyName, lastQuests: quest.quests };
  }
}
