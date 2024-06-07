import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const queues = ['workflow-2-queue', 'approve-2-queue'];

  queues.forEach((q) =>
    app
      .connectMicroservice<MicroserviceOptions>(
        {
          transport: Transport.RMQ,
          options: {
            urls: ['amqp://localhost:5672'],
            queue: q,
          },
        },
        { inheritAppConfig: true },
      )
      .listen(),
  );

  await app.listen(5000);
}
bootstrap();
