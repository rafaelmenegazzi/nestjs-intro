import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable()
export class LoggerInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const request = context.switchToHttp().getRequest();
    console.log(`Requesting path ${request.path}`);

    const startTime = Date.now();
    return next
      .handle()
      .pipe(
        tap(() =>
          console.log(
            `Responded path ${request.path} after ${Date.now() - startTime}ms`,
          ),
        ),
      );
  }
}
