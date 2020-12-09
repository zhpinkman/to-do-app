import { Module } from '@nestjs/common';
import { APP_GUARD } from '@nestjs/core';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import GenreController from './genre.controller';
import GenreServices from './genre.service';
@Module({
  imports: [],
  controllers: [GenreController],
  providers: [
    GenreServices
  ],
})
export default class GenreModule {}