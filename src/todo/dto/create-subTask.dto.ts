import { Optional } from "@nestjs/common";
import { ApiProperty } from "@nestjs/swagger/dist/decorators/api-property.decorator";
import { IsNumber } from "class-validator";

export default class CreateSubTaskDto {

    @ApiProperty({
      description: 'subtask description',
      example: 'carrying out all tasks :))',
      maxLength: 500, 
      type: String
    })
    readonly description: string;

    @IsNumber()
    @ApiProperty({
      description: 'associated task id', 
      example: 1, 
      type: Number
    })
    readonly taskID: number;

  }