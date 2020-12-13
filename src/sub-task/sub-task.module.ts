import { Module } from '@nestjs/common';
import SubTaskController from './sub-task.controller';
import { SubTaskService } from './sub-task.service';

@Module({
  providers: [SubTaskService],
  controllers: [SubTaskController]
})
export class SubTaskModule {}
