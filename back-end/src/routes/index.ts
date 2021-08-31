import { Router } from 'express';

const routes = Router();

routes.get('/', (request, response) => response.json({ Message: 'nova Rota' }));

export default routes;
