import { Module } from '@nestjs/common';
import { APP_GUARD } from '@nestjs/core';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { UserController } from './user.controller';
import { UserServices } from './user.service';
@Module({
  imports: [],
  controllers: [UserController],
  providers: [
    UserServices, 
  ],
  exports: [UserServices]
})
export class UserModule {}