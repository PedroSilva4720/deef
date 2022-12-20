import { UserModel } from './../model/user';
import { Request, Response } from 'express';
import { hash } from 'argon2';

import { UserServices } from '../services/user';

import { InternalServerError } from '../errors/Errors';
import { credentialsDecoderByBasicAuth } from '../utils';
export class UserControllers {
  constructor() {}

  async createUserByCompanyId(req: Request, res: Response) {
    const { name } = req.body;
    const companyId = req.params.companyId;
    const basicAuth = req.headers.authorization;

    const User = new UserModel();

    const { email, password } = credentialsDecoderByBasicAuth(basicAuth);

    User.name = name;
    User.email = email;
    User.password = password;
    User.companyId = companyId;

    try {
      const { status, message } = await User.create();

      return res.status(status).json({ message });
    } catch (error) {
      console.log(error);
      throw new InternalServerError(error);
    }
  }

  updateUserName(req: Request, res: Response) {
    const { newUserName } = req.body;
    const { id }: { id: string } = res.locals.user.params;

    const User = new UserModel();
    const Services = new UserServices();

    User.id = id;

    try {
      console.log('entrou aqui');
      Services.updateUsername(User.id, newUserName);

      return res
        .status(200)
        .json({ message: 'Usuário atualizado com sucesso!' });
    } catch (error) {
      console.log(error);
      throw new Error(error);
    }
  }

  async updateUserPassword(req: Request, res: Response) {
    const Services = new UserServices();
    const { newPassword } = req.body;

    const { id } = res.locals.user.params;

    const passwordHash = await hash(newPassword);

    try {
      Services.updateUsername(id, passwordHash);

      return res.status(200).json({ message: 'Senha atualizada com sucesso!' });
    } catch (error) {
      throw new InternalServerError(error);
    }
  }

  deleteUser(req: Request, res: Response) {
    const { id } = res.locals.user.params;

    const Services = new UserServices();

    try {
      Services.deleteUser(id);

      res.status(200).json({ message: 'Usuário excluído com sucesso!' });
    } catch (error) {
      throw new InternalServerError(error);
    }
  }
}
