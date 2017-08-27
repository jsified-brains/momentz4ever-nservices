import { Router } from 'express';
import * as PhotoController from './photo.controller';
import * as multer from 'multer';

const PhotoRoutes = Router();

PhotoRoutes.post('', PhotoController.add );
PhotoRoutes.get('/:id', PhotoController.get);

let uploadmulter = multer({ dest: 'upload/' });
PhotoRoutes.post('/uploads', uploadmulter.any(), PhotoController.uploads);

export default PhotoRoutes;