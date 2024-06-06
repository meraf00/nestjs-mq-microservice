import { Controller, Inject } from '@nestjs/common';
import { ClientProxy, EventPattern, Payload } from '@nestjs/microservices';
import { ApproveService } from './approve.service';

@Controller()
export class ApproveController {
  constructor(
    readonly wfService: ApproveService,
    @Inject('WORKFLOW_RMQ_SERVICE') readonly wfClient: ClientProxy,
  ) {}

  @EventPattern('approve-handler-one')
  approveHandlerOne(data: any) {
    this.wfClient.emit(
      'workflow-handler-called-from-approve',
      'approved to workspace',
    );
    return this.wfService.approveHandlerOne(data);
  }

  @EventPattern('approve-handler-two')
  approveHandlerTwo() {
    return this.wfService.approveHandlerTwo();
  }

  // with naming convention we can achieve something similar to exchanges
  //
  @EventPattern({
    exchange: 'approval-exchange',
    routingKey: 'approval-handler-three',
  })
  approveHandlerThree(@Payload() data: any) {
    console.log('Approval handler 3', data);
  }
}
