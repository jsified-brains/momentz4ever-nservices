import { Router } from 'express';
import * as AlbumController from './album.controller';

const AlbumRoutes = Router();

AlbumRoutes.post('', AlbumController.add );
AlbumRoutes.get('', AlbumController.get);

export default AlbumRoutes;
