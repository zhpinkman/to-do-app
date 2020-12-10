import { Body, Controller, Delete, Get, Post, Put, Query } from '@nestjs/common';
import { ApiBody, ApiQuery, ApiResponse } from '@nestjs/swagger/dist';
import taskEntity from 'src/db/entity/task.entity';
import CreateTaskDto from 'src/todo/dto/create-task.dto';
import { TaskService } from './task.service';

@Controller('task')
export default class TaskController {
  constructor(private readonly taskService: TaskService) {}

  @ApiResponse({
    status: 201, 
    description: 'returns the created task'
  })
  @Post('post')
  insertTask(@Body() task: CreateTaskDto) {
    return this.taskService.insert(task);
  }

  @ApiResponse({
    status: 200, 
    description: 'returns all the tasks'
  })
  @Get()
  getAlltasks() {
    return this.taskService.getAllTasks();
  }


  @ApiResponse({
    status: 200, 
    description: 'removes the task with provided task ID and returns the task name'
  })
  @ApiQuery({
    name: 'taskID', 
    required: true,
    type: Number, 
    description: 'id of the task you want to remove'
  })
  @Delete('delete')
  deletetask(@Query('taskID') taskID): Promise<taskEntity> {
    return this.taskService.delete(taskID);
  }

  @ApiResponse({
    status: 200,
    description: 'updates the task given its task id and the task object that has to be replaced'
  })
  @ApiQuery({
    name: 'taskID', 
    required: true,
    type: Number, 
    description: 'id of the task you want to update'
  })
  @Put('update')
  updatetask(@Query('taskID') taskID, @Body() task: CreateTaskDto): Promise<taskEntity> {
    return this.taskService.update(taskID, task);
  }
}