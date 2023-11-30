import { Router } from 'express';
import { createUser } from '@/controllers/auth-controllers';
import { validateSchema } from '@/middlewares/validate-schemas';
import { authInputSchema } from '@/schemas/auth-schemas';

const authRouter = Router().post('/', validateSchema(authInputSchema), createUser);

export default authRouter;

/*
    Os 5 principais endpoints:
        .get('/')
        .get('/:id')
        .post('/')
        .put('/:id')
        .delete('/:id')

*/
