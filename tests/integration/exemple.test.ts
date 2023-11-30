// import supertest from 'supertest';
// import app from '../../src/app';
import prisma from '@/database/database-connection';

//const api = supertest(app);

beforeEach(async () => {
  await prisma.user.deleteMany();
});

describe('Descrição principal do test', () => {
  it('descrição específica do test', async () => {});
});
