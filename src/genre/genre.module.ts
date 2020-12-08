import { Module } from '@nestjs/common';
import GenreController from './genre.controller';
import GenreServices from './genre.service';
@Module({
  imports: [],
  controllers: [GenreController],
  providers: [GenreServices],
})
export default class GenreModule {}