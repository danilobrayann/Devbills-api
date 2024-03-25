import { Request, Response } from 'express';
import { CategoriesServices } from '../service/categories.serves';
export class CategoriesControllers {
  async Create(_: Request, res: Response) {
    const service = new CategoriesServices();

    const Result = await service.create();
    return res.status(201).json(Result);
  }
}
