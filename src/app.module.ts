import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HelloModule } from './hello/hello.module';
import { UserModule } from './user/user.module';
import UserEntity from './db/entity/user.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';
import GenreEntity from './db/entity/genre.entity';
import { JwtAuthGuard } from './auth/jwt-auth.guard';
import { APP_GUARD } from '@nestjs/core';
import { TaskService } from './task/task.service';
import { TaskModule } from './task/task.module';
import { CategoryModule } from './category/category.module';
import { LabelModule } from './label/label.module';
import { SubTaskModule } from './sub-task/sub-task.module';
import CategoryService from './category/category.service';
import LabelService from './label/label.service';
;

@Module({
  imports: [
    HelloModule, UserModule, TypeOrmModule.forFeature(
    [
      UserEntity , GenreEntity
    ],
  ),TypeOrmModule.forRoot(), AuthModule, TaskModule, CategoryModule, LabelModule, SubTaskModule,],
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
