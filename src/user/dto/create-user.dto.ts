import { ApiProperty } from "@nestjs/swagger/dist/decorators/api-property.decorator";
import { isNumber } from "class-validator";

export default class CreateUserDto {

    @ApiProperty({
      description: 'user name', 
      example: 'Zhivar',
      maximum: 500, 
      type: String
    })
    readonly name: string;

    @ApiProperty({
      description: 'user password', 
      example: "12345678",
      maximum: 100, 
      minimum: 8, 
      type: String
    })
    readonly password: string;

  }
  