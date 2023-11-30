import { User } from '@prisma/client';
import Joi from 'joi';

export const authInputSchema = Joi.object<User>({
  email: Joi.string().required(),
  name: Joi.string().required(),
});
