import { Injectable } from "@nestjs/common";
import { UserServices } from "src/user/user.service";
import { JwtService } from '@nestjs/jwt';


@Injectable()
export class AuthService {
  constructor(private usersService: UserServices, private jwtService: JwtService) {}



  async validateUser(username: string, pass: string): Promise<any> {
    const user = await this.usersService.findOne(username);
    console.log('auth service')
    console.log(user)
    if (user && user.password === pass) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }

  async login(user: any) {
    console.log(user);
    const payload = { username: user.name, sub: user.id };
    console.log(payload);
    
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}