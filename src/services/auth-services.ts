import { conflictError } from '@/errors/conflited-error';
import { authRepository } from '@/repositories/auth-repositories';

async function createUser(email: string, name: string) {
  // Aqui deve ficar as regras de negócios
  const user = await authRepository.findUser(email);
  if (user) throw conflictError('user');

  const response = await authRepository.createUser(email, name);
  return response;
}

export const authService = {
  createUser,
};
