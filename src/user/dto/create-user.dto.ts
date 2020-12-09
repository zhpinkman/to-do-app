import { ApiProperty } from "@nestjs/swagger/dist/decorators/api-property.decorator";

export default class CreateUserDto {

    @ApiProperty({
      description: 'user name'
    })
    readonly name: string;
    @ApiProperty({
      description: 'list of the books\' ids', 
      default: '[]', 
      maxLength: 500
    })
    readonly books: number[] ;

    @ApiProperty({
      description: 'user password'
    })
    readonly password: string;
  }
  