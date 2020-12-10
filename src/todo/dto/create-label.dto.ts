import { ApiProperty } from "@nestjs/swagger/dist/decorators/api-property.decorator";

export default class CreateLabelDto {

    @ApiProperty({
      description: 'label name (type)'    
    })
    readonly type: string;
  }
  