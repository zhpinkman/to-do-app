import { ApiProperty } from "@nestjs/swagger/dist/decorators/api-property.decorator";
import { isNumber } from "class-validator";

export default class CreateUserDto {

    @ApiProperty({
      description: 'user name', 
      maximum: 500
    })
    readonly name: string;

    @ApiProperty({
      description: 'user password', 
      default: "12345678",
      maximum: 100, 
      minimum: 8
    })
    readonly password: string;

  }
  