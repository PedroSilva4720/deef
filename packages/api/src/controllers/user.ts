import { Request, Response } from 'express';

import { UserModel } from '../models/user';
import { InternalServerError } from '../errors/Errors';
import { credentialsDecoderByBasicAuth } from '../utils';
export class UserControllers {
  constructor() {}

  async createUserByCompanyId(req: Request, res: Response) {
    const { name } = req.body;
    const companyId = req.params.companyId;
    const basicAuth = req.headers.authorization;

    const { email, password } = credentialsDecoderByBasicAuth(basicAuth);

    try {
      const User = new UserModel();
      Object.assign(User, {
        name,
        email,
        password,
        companyId,
      });

      const { status, message } = await User.create();

      return res.status(status).json({ message });
    } catch (error) {
      throw new InternalServerError(error);
    }
  }

  updateUserName(req: Request, res: Response) {
    const { newUserName } = req.body;
    const { id }: { id: string } = res.locals.user.params;

    try {
      const User = new UserModel();
      User.id = id;

      User.updateName(newUserName);

      return res
        .status(200)
        .json({ message: 'Usuário atualizado com sucesso!' });
    } catch (error) {
      throw new Error(error);
    }
  }

  async updateUserPassword(req: Request, res: Response) {
    const { newPassword } = req.body;

    const { id } = res.locals.user.params;

    try {
      const User = new UserModel();
      User.id = id;

      User.updatePassword(newPassword);

      return res.status(200).json({ message: 'Senha atualizada com sucesso!' });
    } catch (error) {
      throw new InternalServerError(error);
    }
  }

  deleteUser(req: Request, res: Response) {
    const { id } = res.locals.user.params;

    try {
      const User = new UserModel();
      User.id = id;

      User.delete();

      res.status(200).json({ message: 'Usuário excluído com sucesso!' });
    } catch (error) {
      throw new InternalServerError(error);
    }
  }
}
