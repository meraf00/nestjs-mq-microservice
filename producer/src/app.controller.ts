import { Controller, Get, Inject } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

@Controller()
export class AppController {
  constructor(
    @Inject('WORKFLOW_RMQ_SERVICE') private wfClient: ClientProxy,
    @Inject('APPROVE_RMQ_SERVICE') private approveClient: ClientProxy,
    @Inject('APPROVE_2_RMQ_SERVICE') private approve2Client: ClientProxy,
  ) {}

  @Get('workflow-1')
  async callWorkflow() {
    this.wfClient.emit('workflow-handler-one', 'hello world');
    console.log('hi');
    return 'Check terminal';
  }

  @Get('workflow-2')
  callWorkflow2(): string {
    this.wfClient.emit('workflow-handler-two', 'hello world');
    return 'Check terminal';
  }

  @Get('approve-1')
  callApprove(): string {
    this.approveClient.emit('approve-handler-one', 'hello world');
    return 'Check terminal';
  }

  @Get('approve-2')
  callApprove2(): string {
    this.approveClient.emit('approve-handler-two', 'hello world');
    return 'Check terminal';
  }

  @Get('approve-3')
  callApprove3() {
    this.approveClient.emit(
      {
        exchange: 'approval-exchange',
        routingKey: 'approval-handler-three',
      },

      'Hello',
    );
  }

  @Get('consumer-2')
  callApprove4() {
    console.log('akdjfkdj');
    this.approve2Client.emit(
      {
        exchange: 'approval-exchange',
        routingKey: 'approval-handler-three',
      },

      'Hello',
    );
  }
}
