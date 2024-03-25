import { Categories } from '../entities/categories.entity';

export class CategoriesServices {
  async create(): Promise<Categories> {
    const categories = new Categories({
        title: 'exmpol categories',
        color: '#f54'
    });
    return categories;
  }
}
