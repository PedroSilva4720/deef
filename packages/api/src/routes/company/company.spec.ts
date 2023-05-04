import supertest from 'supertest';
import crypto from 'crypto';

import { app } from '../../server';
import { prisma } from '../../prisma';

beforeAll(async () => {
  const companys = await prisma.company.findMany();

  if (companys.length > 0) {
    await prisma.company.deleteMany();
  }
});

describe('Company tests switch', () => {
  it('Should create a new company', async () => {
    //generate random string to use as name
    const bytes = crypto.randomBytes(4);
    const randomString = bytes.toString('hex').substring(0, 8);

    const data = {
      companyName: randomString,
    };

    //make request to create new company
    const response = await supertest(app)
      .post('/company/')
      .send(data)
      .expect(201)
      .expect('Content-Type', 'application/json; charset=utf-8');
    expect(response.body).toEqual({ message: 'Criado com sucesso!' });

    //verify if company were created
    const company = await prisma.company.findFirst();

    expect(company.id).toBeTruthy();
    expect(company.companyName).toEqual(randomString);
    expect(company.companyUsername).toBeTruthy();
    expect(company.createdAt).toBeTruthy();
  });
});
