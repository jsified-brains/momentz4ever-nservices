import { Router } from 'express';
import * as PhotoController from './photo.controller';

const PhotoRoutes = Router();

PhotoRoutes.post('', PhotoController.add );
PhotoRoutes.get('/:id', PhotoController.get);


export default PhotoRoutes;