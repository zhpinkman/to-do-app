import { Request, Controller, Get, Post, UseGuards, Body } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AppService } from './app.service';
import { LocalAuthGuard } from './auth/local-auth.guard';
import CreateUserDto from './user/dto/create-user.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('temp')
  getHello(): string {
    console.log('temp')
    return this.appService.getHello();
  }


  @UseGuards(LocalAuthGuard)
  @Post('auth/login')
  async login(@Body() req) {
    console.log('start');
    return req;
  }

}
