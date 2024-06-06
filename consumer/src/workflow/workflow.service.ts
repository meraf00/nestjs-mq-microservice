import { Injectable } from '@nestjs/common';

@Injectable()
export class WorkflowService {
  constructor() {}

  workflowHandlerOne(data: any) {
    console.log('Workflow handler one', data);
    return 'Workflow handler one';
  }

  workflowHandlerTwo() {
    console.log('Workflow handler two');
    return 'Workflow handler two';
  }

  workflowHandlerCalledFromApprove(data: any) {
    console.log('Workflow handler called from approve', data);
    return 'Workflow handler called from approve';
  }
}
