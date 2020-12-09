import { SetMetadata } from '@nestjs/common';

export const jwtConstants = {
    secret: 'secretKey',
  };



export const IS_PUBLIC_KEY = 'isPublic';
export const Public = () => SetMetadata(IS_PUBLIC_KEY, true);
export const NO_AUTH_TOKEN = 'No auth token'