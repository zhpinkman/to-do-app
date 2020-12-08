import { ApiProperty } from "@nestjs/swagger/dist/decorators/api-property.decorator";

export default class CreateGenreDto {

    @ApiProperty({
      description: 'genre name (type)'    
    })
    readonly type: string;
  }
  