import { Module } from '@nestjs/common';
import { WorkflowModule } from './workflow/workflow.module';
import { ApproveModule } from './approve/approve.module';

@Module({
  imports: [WorkflowModule, ApproveModule],
})
export class AppModule {}
