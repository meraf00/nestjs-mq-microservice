import { Module } from '@nestjs/common';
import { WorkflowModule } from './workflow/workflow.module';
import { ApproveModule } from './approve/approve.module';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { CustomInterceptor } from './interceptor/interceptor';

@Module({
  imports: [WorkflowModule, ApproveModule],
  providers: [
    {
      provide: APP_INTERCEPTOR,
      useClass: CustomInterceptor,
    },
  ],
})
export class AppModule {}
