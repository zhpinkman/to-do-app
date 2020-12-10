import { Body, Controller, Get, Post } from '@nestjs/common';
import { ApiResponse } from '@nestjs/swagger/dist/decorators';
import CreateLabelDto from 'src/todo/dto/create-label.dto';
import LabelService from './label.service';

@Controller('label')
export default class labelController {
  constructor(private readonly labelServices: LabelService) {}
  @ApiResponse({
    status: 201, 
    description: 'returns the created label'
  })
  @Post('post')
  postlabel( @Body() label: CreateLabelDto) {
    return this.labelServices.insert(label);
  }

  @ApiResponse({
    status: 200, 
    description: 'returns all the labels'
  })
  @Get()
  getAll() {
    return this.labelServices.getAlllabel();
  }
}