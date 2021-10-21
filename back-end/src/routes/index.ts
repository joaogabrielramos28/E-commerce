import { Router } from 'express';

import productsRouter from './products.routes';
import usersRouter from './users.routes';
import sessionsRouter from './sessions.routes';
import bannersRouter from './banner.routes';

const routes = Router();

routes.use('/products', productsRouter);
routes.use('/users', usersRouter);
routes.use('/sessions', sessionsRouter);
routes.use('/banners', bannersRouter);

export default routes;
