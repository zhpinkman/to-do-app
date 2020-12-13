import { Controller, Post, Body, Get, Delete, Query, Put } from "@nestjs/common";
import { ApiResponse, ApiQuery } from "@nestjs/swagger/dist";
import SubTaskEntity from "src/db/entity/subTask.entity";
import taskEntity from "src/db/entity/task.entity";
import CreateSubTaskDto from "src/todo/dto/create-subTask.dto";
import { SubTaskService } from "./sub-task.service";


@Controller('subtask')
export default class SubTaskController {
  constructor(private readonly subTaskService: SubTaskService) {}

  @ApiResponse({
    status: 201, 
    description: 'returns the created task'
  })
  @Post('post')
  insertTask(@Body() task: CreateSubTaskDto) {
    return this.subTaskService.insert(task);
  }

  @ApiResponse({
    status: 200, 
    description: 'returns all the tasks'
  })
  @Get()
  getAlltasks() {
    return this.subTaskService.getAllSubTasks();
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
  deletetask(@Query('subTaskID') subTaskID): Promise<SubTaskEntity> {
    return this.subTaskService.delete(subTaskID);
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
  updatetask(@Query('subTaskID') subTaskID, @Body() subTask: CreateSubTaskDto): Promise<SubTaskEntity> {
    return this.subTaskService.update(subTaskID, subTask);
  }
}