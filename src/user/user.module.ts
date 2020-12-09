import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserServices } from './user.service';
@Module({
  imports: [],
  controllers: [UserController],
  providers: [UserServices],
  exports: [UserServices]
})
export class UserModule {}