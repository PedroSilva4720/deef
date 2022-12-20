import { UserServices } from '../services/user';
import { hash } from 'argon2';

export class UserModel {
  public name;
  public email;
  public password;
  public companyId;
  public id;
  public passwordHash;
  public createdAt;
  constructor() {
    this.createdAt = new Date();
  }

  async create() {
    this.passwordHash = await hash(this.password);

    const Service = new UserServices();

    Service.create(
      this.name,
      this.email,
      this.passwordHash,
      this.companyId,
      this.createdAt
    );

    return { status: 201, message: 'Criado com sucesso!' };
  }
}
