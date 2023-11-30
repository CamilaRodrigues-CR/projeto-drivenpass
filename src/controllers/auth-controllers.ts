import { User } from '@prisma/client';
import { Request, Response } from 'express';
import httpStatus from 'http-status';
import { authService } from '@/services/auth-services';

export async function createUser(req: Request, res: Response) {
  const { email, name } = req.body as Omit<User, 'id'>;
  await authService.createUser(email, name);

  res.sendStatus(httpStatus.NOT_IMPLEMENTED);
}

/*
export async function getById(req: Request, res: Response){
    const id = Number(req.params.id)
    if (!id || isNaN(id) || id < 1 ) throw invalidIdError()        => validar se o id é um numero válido

    res.sendStatus(httpStatus.XXX)
}

*/
