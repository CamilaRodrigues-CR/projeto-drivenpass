import prisma from '@/database/database-connection';

async function createUser(email: string, name: string) {
  const response = await prisma.user.create({
    data: {
      email,
      name,
    },
  });
  return response;
}

async function findUser(email: string) {
  const response = await prisma.user.findUnique({
    where: {
      email,
    },
  });
  return response;
}

export const authRepository = {
  createUser,
  findUser,
};
