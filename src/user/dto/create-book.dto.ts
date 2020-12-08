import { ApiProperty } from "@nestjs/swagger/dist/decorators/api-property.decorator";

export default class CreateBookDto {

    @ApiProperty({
      description: 'book\'s names',
      maxLength: 500, 
    })
    readonly name: string;

    @ApiProperty({
      description: 'associated user id'
    })
    readonly userID: number;

    @ApiProperty({
      description: 'associated genre ids',
      default: '[]'
    })
    readonly genreIDs: number[];
  }