import { Injectable } from "@nestjs/common";
import { UserServices } from "src/user/user.service";


@Injectable()
export class AuthService {
  constructor(private usersService: UserServices) {}

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
}