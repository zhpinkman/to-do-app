import { Request, Controller, Get, Post, UseGuards, Body } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ApiBody, ApiResponse } from '@nestjs/swagger/dist';
import { AppService } from './app.service';
import { AuthService } from './auth/auth.service';
import { Public } from './auth/constants';
import { JwtAuthGuard } from './auth/jwt-auth.guard';
import { LocalAuthGuard } from './auth/local-auth.guard';
import CreateUserDto from './user/dto/create-user.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService, private authService: AuthService) {}

  @ApiResponse({
    status: 200, 
    description: 'just a dummy api for checking weather server is up'
  })
  @Get('temp')
  getHello(): string {
    console.log('temp')
    return this.appService.getHello();
  }


  @Public()
  @UseGuards(LocalAuthGuard)
  @Post('auth/login')
  @ApiResponse({
    description: 'use this api to login to app', 
    status: 201
  })
  @ApiBody({
    description: 'user name and password',
    schema: {
      type: 'object',
      properties: {
        "username": {
          type: 'string', 
          example: 'Zhivar'
        }, 
        "password": {
          type: 'string', 
          example: '****'
        }
      }
    }
  })
  async login(@Request() req) {
    return this.authService.login(req.user);
  }


  @Get('profile')
  @ApiResponse({
    description: 'get the logged in user', 
    status: 200
  })
  getProfile(@Request() req) {
    return req.user;
  }

}
