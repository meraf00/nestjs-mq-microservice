import { Controller } from '@nestjs/common';
import { EventPattern, Payload } from '@nestjs/microservices';
import { WorkflowService } from './workflow.service';

@Controller()
export class WorkflowController {
  constructor(readonly wfService: WorkflowService) {}

  @EventPattern('workflow-handler-one')
  workflowHandlerOne(@Payload() data: any) {
    return this.wfService.workflowHandlerOne(data);
  }

  @EventPattern('workflow-handler-two')
  workflowHandlerTwo() {
    return this.wfService.workflowHandlerTwo();
  }

  @EventPattern('workflow-handler-called-from-approve')
  workflowHandlerCalledFromApprove(data: any) {
    return this.wfService.workflowHandlerCalledFromApprove(data);
  }
}
