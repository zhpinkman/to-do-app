import { Body, Controller, Get, Post } from '@nestjs/common';
import { ApiResponse } from '@nestjs/swagger/dist/decorators';
import CreateGenreDto from 'src/user/dto/create-genre.dto';
import { UserServices } from 'src/user/user.service';
import GenreServices from './genre.service';

@Controller('genre')
export default class GenreController {
  constructor(private readonly genreServices: GenreServices) {}
  @ApiResponse({
    status: 201, 
    description: 'returns the created genre'
  })
  @Post('post')
  postGenre( @Body() genre: CreateGenreDto) {
    return this.genreServices.insert(genre);
  }

  @ApiResponse({
    status: 200, 
    description: 'returns all the genres'
  })
  @Get()
  getAll() {
    return this.genreServices.getAllGenre();
  }
}