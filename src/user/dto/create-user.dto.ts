import { ApiProperty } from "@nestjs/swagger/dist/decorators/api-property.decorator";

export default class CreateUserDto {

    @ApiProperty({
      description: 'user name'
    })
    readonly name: string;

    @ApiProperty({
      description: 'user password'
    })
    readonly password: string;

  }
  