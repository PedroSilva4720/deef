require('dotenv-safe/config');
const { exec } = require('child_process');

//Utilizar schema de teste para fazer os testes fora do banco de produção

process.env.DATABASE_URL = `${process.env.DATABASE_URL}?schema=test`;

exec('yarn db:migrate');

module.exports = {
  extensionsToTreatAsEsm: ['.ts'],
  testEnvironment: 'node',
  transform: {},
  preset: 'ts-jest',
  testMatch: ['/**/*.spec.ts'],
};
