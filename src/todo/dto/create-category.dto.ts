import { ApiProperty } from "@nestjs/swagger/dist";



export class CreateCategoryDto {

    @ApiProperty({})
    readonly name: string

}