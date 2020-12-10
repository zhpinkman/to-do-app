import { Injectable } from '@nestjs/common';
import CategoryEntity from 'src/db/entity/category.entity';
import { CreateCategoryDto } from 'src/todo/dto/create-category.dto';

@Injectable()
export default class CategoryService {
    async insert(categoryDetails: CreateCategoryDto): Promise<CategoryEntity> {

    const categoryEntity: CategoryEntity = CategoryEntity.create();
    const {name} = categoryDetails;

    categoryEntity.name = name;
    categoryEntity.tasks = [];
    await CategoryEntity.save(categoryEntity);
    return categoryEntity;
  }
  async getAllcategory(): Promise<CategoryEntity[]> {
        return await CategoryEntity.find();
  }
}