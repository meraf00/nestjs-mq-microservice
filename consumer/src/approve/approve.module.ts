import { Module } from '@nestjs/common';
import { ApproveService } from './approve.service';
import { ApproveController } from './approve.controller';
import { ClientsModule, Transport } from '@nestjs/microservices';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'WORKFLOW_RMQ_SERVICE',
        transport: Transport.RMQ,
        options: {
          urls: ['amqp://localhost:5672'],
          queue: 'workflow-queue',
        },
      },
    ]),
  ],
  controllers: [ApproveController],
  providers: [ApproveService],
})
export class ApproveModule {}
