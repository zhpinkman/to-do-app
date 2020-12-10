import { Module } from '@nestjs/common';
import labelController from './label.controller';
import LabelService from './label.service';

@Module({
  controllers: [labelController], 
  providers: [LabelService]
})
export class LabelModule {}
