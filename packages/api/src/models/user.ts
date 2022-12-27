import { UserRepository } from '../repositories/user';
import { hash } from 'argon2';

export class UserModel {
  name: string;
  email: string;
  password: string;
  companyId: string;
  id: string;
  passwordHash: string;
  createdAt: Date;
  constructor() {
    this.createdAt = new Date();
  }

  async create() {
    this.passwordHash = await hash(this.password);

    const Repository = new UserRepository();

    Repository.create(
      this.name,
      this.email,
      this.passwordHash,
      this.companyId,
      this.createdAt
    );

    return { status: 201, message: 'Criado com sucesso!' };
  }

  updateName(newUserName: string) {
    const Repository = new UserRepository();
    Repository.updateUsername(this.id, newUserName);
  }

  async updatePassword(newPassword: string) {
    const Repository = new UserRepository();
    const passwordHash = await hash(newPassword);

    Repository.updatePassword(this.id, passwordHash);
  }

  delete() {
    const Repository = new UserRepository();

    Repository.deleteUser(this.id);
  }
}
