import { Router } from 'express';
import { CategoriesControllers } from '../controllers/categories.controllers';

export const CategoriesRoutes = Router();

const Controller = new CategoriesControllers();
CategoriesRoutes.post('/', Controller.Create);
