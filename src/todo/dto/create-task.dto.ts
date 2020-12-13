import { Optional } from "@nestjs/common";
import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger/dist/decorators/api-property.decorator";
import { IsArray, isNumber, IsNumber, IsOptional, Length } from "class-validator";

export default class CreateTaskDto {

    @ApiProperty({
      description: 'name of the task',
      maxLength: 500, 
      example: 'temp task', 
      type: String
    })
    readonly name: string;


    @Optional()
    @ApiPropertyOptional({
      description: 'the description of the task',
      maxLength: 500, 
      example: 'this task is so arduous', 
      type: String
    })
    readonly description: string;

    @IsNumber()
    @ApiProperty({
      description: 'associated user id', 
      example: '1', 
      type: Number
    })
    readonly userID: number;

    @IsArray()
    @Optional()
    @ApiPropertyOptional({
      description: 'array of the subtasks\' descriptions',
      example: ['subtask1', 'subtask2'], 
      type: Array(String)
    })
    readonly subTasks: string[];


    @IsNumber()
    @ApiProperty({
      description: 'ID of the category task belongs to',
      example: 1, 
      type: Number
    })
    readonly category: number;

    @IsOptional()
    @IsArray({})
    @Optional()
    @ApiPropertyOptional({
      description: 'labels associated with the task', 
      example: [1],
      type: Array(Number)
    })
    readonly labels: number[];
  }