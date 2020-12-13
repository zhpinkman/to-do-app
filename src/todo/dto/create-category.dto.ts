import { ApiProperty } from "@nestjs/swagger/dist";
import { IsString, Length, max, maxLength } from "class-validator";



export class CreateCategoryDto {

    @IsString()
    @ApiProperty({
        description: 'name of the category', 
        maxLength: 500
    })
    readonly name: string

}