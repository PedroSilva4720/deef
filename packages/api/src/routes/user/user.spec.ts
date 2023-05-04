import supertest from 'supertest';
import { prisma } from '../../prisma';
import { app } from '../../server';

beforeAll(async () => {
  await prisma.user.deleteMany();
  await prisma.company.deleteMany();
});

afterAll(async () => {
  await prisma.user.deleteMany();
  await prisma.company.deleteMany();
});

describe('User tests switch', () => {
  it('Should create a new user', async () => {
    //create new company
    const company = await prisma.company.create({
      data: {
        companyName: 'company',
        companyUsername: 'company',
        createdAt: new Date(),
      },
    });

    //uer data
    const name = 'john doe';
    const password = '#jf49P@q';
    const data = {
      name,
    };

    //make request
    const response = await supertest(app)
      .post(`/user/${company.id}`)
      .send(data)
      .auth(`${name}@test.com`, password)
      .expect(201)
      .expect('Content-Type', 'application/json; charset=utf-8');

    expect(response.body).toEqual({ message: 'Criado com sucesso!' });

    //verify if were created
    const user = await prisma.user.findFirst();

    expect(user.id).toBeTruthy();
    expect(user.createdAt).toBeTruthy();
    expect(user.passwordHash).toBeTruthy();
    expect(user.name).toEqual(name);
    expect(user.companyId).toEqual(company.id);
  });

  it('Should login an user', async () => {
    //user data
    const name = 'john doe';
    const password = '#jf49P@q';

    //make request
    const response = await supertest(app)
      .get('/user')
      .auth(`${name}@test.com`, password)
      .expect(200)
      .expect('Content-Type', 'application/json; charset=utf-8');

    expect(response.body.token).toBeTruthy();
  });

  it('should not login an user', async () => {
    //user wrong data
    const name = 'john doe';
    const password = '12345';

    //make request
    const response = await supertest(app)
      .get('/user')
      .auth(`${name}@test.com`, password)
      .expect(401)
      .expect('Content-Type', 'application/json; charset=utf-8');

    expect(response.body).toEqual({
      message: 'Falha ao realizar login, por favor revise o email e a senha',
    });
  });
});
