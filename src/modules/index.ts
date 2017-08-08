import AlbumRoutes from './album/album.routes';
import * as express from 'express';

const AppRoutes  = (app: express.Express) => {
    app.use('/api/v1/albums', AlbumRoutes);
}

export default AppRoutes;