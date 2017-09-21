import { Router } from 'express';
import * as PhotoController from './photo.controller';
import * as multer from 'multer';

const PhotoRoutes = Router();

PhotoRoutes.post('', PhotoController.add );
PhotoRoutes.get('/:id', PhotoController.get);
PhotoRoutes.get('/:id/:name', PhotoController.getById);

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
     cb(null, './upload/');
        },
     filename: function (req, file, cb) {
        cb(null, file.originalname);
      }
    });

let uploadmulter = multer({ storage: storage });
PhotoRoutes.post('/uploads', uploadmulter.any(), PhotoController.uploads);

export default PhotoRoutes;