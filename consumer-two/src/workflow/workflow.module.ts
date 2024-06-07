import { Module } from '@nestjs/common';
import { WorkflowService } from './workflow.service';
import { WorkflowController } from './workflow.controllers';

@Module({
  imports: [],
  controllers: [WorkflowController],
  providers: [WorkflowService],
})
export class WorkflowModule {}
