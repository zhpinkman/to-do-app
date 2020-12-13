import { Optional } from "@nestjs/common";
import { ApiProperty } from "@nestjs/swagger/dist/decorators/api-property.decorator";
import { IsNumber } from "class-validator";

export default class CreateSubTaskDto {

    @ApiProperty({
      description: 'subtask description',
      maxLength: 500, 
    })
    readonly description: string;

    @IsNumber()
    @ApiProperty({
      description: 'associated task id'
    })
    readonly taskID: number;

  }