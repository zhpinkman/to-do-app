import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HelloModule } from './hello/hello.module';
import { UserModule } from './user/user.module';
import UserEntity from './db/entity/user.entity';
import BooksModule from './books/books.module';
import GenreModule from './genre/genre.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';
import BookEntity from './db/entity/book.entity';
import GenreEntity from './db/entity/genre.entity';
import { JwtAuthGuard } from './auth/jwt-auth.guard';
import { APP_GUARD } from '@nestjs/core';
import { TaskService } from './task/task.service';
import { CategoryService } from './category/category.service';
import { LabelService } from './label/label.service';
import { TaskModule } from './task/task.module';
import { CategoryModule } from './category/category.module';
import { LabelModule } from './label/label.module';
;

@Module({
  imports: [
    HelloModule, BooksModule, UserModule, GenreModule, TypeOrmModule.forFeature(
    [
      UserEntity, BookEntity , GenreEntity
    ],
  ),TypeOrmModule.forRoot(), AuthModule, TaskModule, CategoryModule, LabelModule,],
  controllers: [AppController],
  providers: [
    AppService, 
    {
      provide: APP_GUARD,
      useClass: JwtAuthGuard,
    }, TaskService, CategoryService, LabelService
  ],
})
export class AppModule {}
