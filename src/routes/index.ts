import { Router } from 'express';

import { baseRouter } from './base.routes';
import { CategoriesRoutes } from './categories.route';

export const routes = Router();

routes.use('/', baseRouter);
routes.use('/categories', CategoriesRoutes);
