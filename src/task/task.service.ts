import CategoryEntity from 'src/db/entity/category.entity';
import LabelEntity from 'src/db/entity/label.entity';
import TaskEntity from 'src/db/entity/task.entity';
import UserEntity from 'src/db/entity/user.entity';
import CreateTaskDto from 'src/todo/dto/create-task.dto';

export class TaskService {

  async insert(taskDetails: CreateTaskDto): Promise<TaskEntity> {
    const {name, description, userID, subTasks, category, labels} = taskDetails;
    const task = new TaskEntity();
    task.name = name;
    task.user = await UserEntity.findOne(userID);
    task.labels = [];
    task.subTasks = subTasks || '';
    task.category = await CategoryEntity.findOne(category);
    task.description = description || '';
    for ( let i = 0; i < labels.length ; i++)
    {
             const label = await LabelEntity.findOne(labels[i]);
             task.labels.push(label);
    }
    await task.save();
    return task;
  }
  async getAllTasks(): Promise<TaskEntity[] > {
    return TaskEntity.find();
  }

  async delete(TaskID: number): Promise<TaskEntity> {
    const Task = await TaskEntity.findOne(TaskID);
    return Task.remove();
  }

  async update(TaskID: number, taskDetails: CreateTaskDto): Promise<TaskEntity> {
    const {name, description, userID, subTasks, category, labels} = taskDetails;
    const task = new TaskEntity();
    task.name = name;
    task.user = await UserEntity.findOne(userID);
    task.labels = [];
    task.subTasks = subTasks || '';
    task.category = await CategoryEntity.findOne(category);
    task.description = description || '';
    for ( let i = 0; i < labels.length ; i++)
    {
             const label = await LabelEntity.findOne(labels[i]);
             task.labels.push(label);
    }
    await task.save();
    return task;
  }
}