import { Router } from 'express';
import * as UserController from './user.controller';

const UserRoutes = Router();

UserRoutes.post('', UserController.add);
//UserRoutes.get('', UserController.get);
//UserRoutes.get('/:id', UserController.getById);

export default UserRoutes;
