import { ExecutionContext, NestInterceptor } from '@nestjs/common';
import { tap } from 'rxjs';

export class CustomInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next) {
    return next.handle().pipe(tap((data) => console.log('Before...', data)));
  }
}
