import { Request, Controller, Get, Post, UseGuards, Body } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AppService } from './app.service';
import { AuthService } from './auth/auth.service';
import { Public } from './auth/constants';
import { JwtAuthGuard } from './auth/jwt-auth.guard';
import { LocalAuthGuard } from './auth/local-auth.guard';
import CreateUserDto from './user/dto/create-user.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService, private authService: AuthService) {}

  @Get('temp')
  getHello(): string {
    console.log('temp')
    return this.appService.getHello();
  }


  @Public()
  @UseGuards(LocalAuthGuard)
  @Post('auth/login')
  async login(@Request() req) {
    return this.authService.login(req.user);
  }


  @Get('profile')
  getProfile(@Request() req) {
    return req.user;
  }

}
