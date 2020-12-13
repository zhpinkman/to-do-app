import { Optional } from "@nestjs/common";
import { ApiProperty } from "@nestjs/swagger/dist/decorators/api-property.decorator";

export default class CreateSubTaskDto {

    @ApiProperty({
    //   description: 'book\'s names',
    //   maxLength: 500, 
    })
    readonly description: string;

    @ApiProperty({
    //   description: 'associated user id'
    })
    readonly taskID: number;

  }