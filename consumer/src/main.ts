import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const queues = ['workflow-queue', 'approve-queue'];

  queues.forEach((q) =>
    app
      .connectMicroservice<MicroserviceOptions>({
        transport: Transport.RMQ,
        options: {
          urls: ['amqp://localhost:5672'],
          queue: q,
        },
      })
      .listen(),
  );

  await app.listen(4000);
}
bootstrap();
