import { Router } from 'express';
import * as AlbumController from './album.controller';

const AlbumRoutes = Router();

AlbumRoutes.post('', AlbumController.add );
AlbumRoutes.get('', AlbumController.get);
AlbumRoutes.get('/:id', AlbumController.getById);

export default AlbumRoutes;
