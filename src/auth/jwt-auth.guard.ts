
import { ExecutionContext, Injectable, UnauthorizedException } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { AuthGuard } from '@nestjs/passport';
import { IS_PUBLIC_KEY, NO_AUTH_TOKEN } from './constants';

@Injectable()
export class JwtAuthGuard extends AuthGuard('jwt') {

    constructor(private reflector: Reflector) {
        super()
    }

    canActivate(context: ExecutionContext) {
        const isPublic = this.reflector.getAllAndOverride<boolean>(IS_PUBLIC_KEY, [
            context.getHandler(),
            context.getClass(),
          ]);
          if (isPublic) {
            return true;
          }
        return super.canActivate(context);
    }

    handleRequest(err, user, info) {
        console.log(err)
        console.log(user);
        console.log(info);
        
        if (err || !user) {
            console.log('returning error or unauthorized');
            throw err || new UnauthorizedException();
        }
        return user;
    }

}
