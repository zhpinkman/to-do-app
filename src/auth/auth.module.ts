import { Module } from '@nestjs/common';
import { UserModule } from 'src/user/user.module';
import { UserServices } from 'src/user/user.service';
import { AuthService } from './auth.service';

@Module({
  providers: [
    AuthService, 
    UserServices
  ], 
  imports: [
    UserModule
  ]
})
export class AuthModule {}
