import { Optional } from "@nestjs/common";
import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger/dist/decorators/api-property.decorator";
import { IsArray, isNumber, IsNumber, IsOptional, Length } from "class-validator";

export default class CreateTaskDto {

    @ApiProperty({
      description: 'name of the task',
      maxLength: 500
    })
    readonly name: string;


    @Optional()
    @ApiPropertyOptional({
      description: 'the description of the task',
      maxLength: 500, 
    })
    readonly description: string;

    @IsNumber()
    @ApiProperty({
      description: 'associated user id'
    })
    readonly userID: number;

    @IsArray()
    @Optional()
    @ApiPropertyOptional({
      description: 'array of the subtasks\' descriptions' 
    })
    readonly subTasks: string[];


    @IsNumber()
    @ApiProperty({
      description: 'ID of the category task belongs to',
    })
    readonly category: number;

    @IsOptional()
    @IsArray({})
    @Optional()
    @ApiPropertyOptional({
      description: 'labels associated with the task', 
      type: Array(Number)
    })
    readonly labels: number[];
  }