import { Optional } from "@nestjs/common";
import { ApiProperty } from "@nestjs/swagger/dist/decorators/api-property.decorator";

export default class CreateTaskDto {

    @ApiProperty({
    //   description: 'book\'s names',
    //   maxLength: 500, 
    })
    readonly name: string;


    @Optional()
    @ApiProperty({
    //   description: 'book\'s names',
    //   maxLength: 500, 
    })
    readonly description: string;

    @ApiProperty({
    //   description: 'associated user id'
    })
    readonly userID: number;

    @Optional()
    @ApiProperty({})
    readonly subTasks: string;


    @ApiProperty({
    //   description: 'associated genre ids',
    //   default: '[]'
    })
    readonly category: number;

    @Optional()
    @ApiProperty({})
    readonly labels: number[];
  }