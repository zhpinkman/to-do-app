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
    description: 'returns the created subTask'
  })
  @Post('post')
  insertTask(@Body() task: CreateSubTaskDto) {
    return this.subTaskService.insert(task);
  }

  @ApiResponse({
    status: 200, 
    description: 'returns all the subTasks'
  })
  @Get()
  getAlltasks() {
    return this.subTaskService.getAllSubTasks();
  }


  @ApiResponse({
    status: 200, 
    description: 'removes the subTask with provided subTaskID and returns the removed subTask'
  })
  @ApiQuery({
    name: 'subTaskID', 
    required: true,
    type: Number, 
  })
  @Delete('delete')
  deletetask(@Query('subTaskID') subTaskID): Promise<SubTaskEntity> {
    return this.subTaskService.delete(subTaskID);
  }

  @ApiResponse({
    status: 200,
    description: 'updates the subtask given its subtaskID and the subTask object that has to be replaced'
  })
  @ApiQuery({
    name: 'subTaskID', 
    required: true,
    type: Number, 
  })
  @Put('update')
  updatetask(@Query('subTaskID') subTaskID, @Body() subTask: CreateSubTaskDto): Promise<SubTaskEntity> {
    return this.subTaskService.update(subTaskID, subTask);
  }
}