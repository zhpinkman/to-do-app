import { Body, Controller, Get, Post } from '@nestjs/common';
import { ApiResponse } from '@nestjs/swagger/dist/decorators';
import { CreateCategoryDto } from 'src/todo/dto/create-category.dto';
import CategoryService from './category.service';


@Controller('category')
export default class CategoryController {
  constructor(private readonly categoryServices: CategoryService) {}
  @ApiResponse({
    status: 201, 
    description: 'returns the created category'
  })
  @Post('post')
  postcategory( @Body() category: CreateCategoryDto) {
    return this.categoryServices.insert(category);
  }

  @ApiResponse({
    status: 200, 
    description: 'returns all the categories'
  })
  @Get()
  getAll() {
    return this.categoryServices.getAllcategory();
  }
}