import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { UserModule } from 'src/user/user.module';
import { UserServices } from 'src/user/user.service';
import { AuthService } from './auth.service';
import { LocalStrategy } from './local.strategy';

@Module({
  providers: [
    AuthService, 
    UserServices, 
    LocalStrategy
  ], 
  imports: [
    UserModule, 
    PassportModule
  ]
})
export class AuthModule {}
