import { Module } from '@nestjs/common';
import CategoryController from './category.controller';
import categoryService from './category.service';

@Module({
  controllers: [CategoryController], 
  providers: [categoryService]
})
export class CategoryModule {}
