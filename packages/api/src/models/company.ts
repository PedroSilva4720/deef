import { CompanyRepository } from '../repositories/company';

export class CompanyModel {
  id: string;
  constructor() {}
  create(companyName: string) {
    const Repository = new CompanyRepository();

    const userName = companyName.toLowerCase().replaceAll(' ', '-');
    Repository.create(companyName, userName);
  }

  updateName(newCompanyName: string) {
    const Repository = new CompanyRepository();

    const newUsername = newCompanyName.toLowerCase().replaceAll(' ', '-');

    Repository.updateCompanyName(this.id, newCompanyName, newUsername);
  }
}
