import { Injectable } from '@nestjs/common';
import LabelEntity from 'src/db/entity/label.entity';
import labelEntity from 'src/db/entity/label.entity';
import CreateLabelDto from 'src/todo/dto/create-label.dto';

@Injectable()
export default class LabelService {
    async insert(labelDetails: CreateLabelDto): Promise<labelEntity> {

    const labelEntity: labelEntity = LabelEntity.create();
    const {type} = labelDetails;

    labelEntity.name = type;
    await LabelEntity.save(labelEntity);
    return labelEntity;
  }
  async getAlllabel(): Promise<labelEntity[]> {
        return await labelEntity.find();
  }
}