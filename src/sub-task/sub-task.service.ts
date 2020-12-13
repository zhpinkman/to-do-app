import CategoryEntity from 'src/db/entity/category.entity';
import LabelEntity from 'src/db/entity/label.entity';
import SubTaskEntity from 'src/db/entity/subTask.entity';
import TaskEntity from 'src/db/entity/task.entity';
import UserEntity from 'src/db/entity/user.entity';
import CreateSubTaskDto from 'src/todo/dto/create-subTask.dto';

export class SubTaskService {

  async insert(subTaskDetails: CreateSubTaskDto): Promise<SubTaskEntity> {
    const subTask = new SubTaskEntity();
    subTask.description = subTaskDetails.description;
    subTask.task = await TaskEntity.findOne(subTaskDetails.taskID);
    await subTask.save();
    return subTask;
  }

  async getAllSubTasks(): Promise<SubTaskEntity[] > {
    return SubTaskEntity.find();
  }

  async delete(subTaskID: number): Promise<SubTaskEntity> {
    const SubTask = await SubTaskEntity.findOne(subTaskID);
    return SubTask.remove();
  }

  async update(subTaskID: number, subTaskDetails: CreateSubTaskDto): Promise<SubTaskEntity> {
    const subTask = await SubTaskEntity.findOne(subTaskID)
    subTask.description = subTaskDetails.description;
    subTask.task = await TaskEntity.findOne(subTaskDetails.taskID);
    await subTask.save()
    return subTask;
  }
}