import { ApiProperty } from "@nestjs/swagger/dist/decorators/api-property.decorator";

export default class CreateLabelDto {

    @ApiProperty({
      description: 'name of the label',
      maxLength: 500
    })
    readonly type: string;
  }
  