import AlbumRoutes from './album/album.routes';
import UserRoutes from './user/user.route';
import * as express from 'express';

function route(route){
    return `/api/v1/${route}`;
}
const AppRoutes  = (app: express.Express) => {
    app.use(route('albums'), AlbumRoutes);
    app.use(route('users'), UserRoutes);
}

export default AppRoutes;
