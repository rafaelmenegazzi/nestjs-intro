import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';

import { AppModule } from './app.module';
import { LoggerInterceptor } from './interceptor/logger.interceptor';
import { TimeoutInterceptor } from './interceptor/timeout.interceptor';
import { ExceptionsLogger } from './middleware/exception.logger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalFilters(new ExceptionsLogger());
  app.useGlobalInterceptors(new LoggerInterceptor(), new TimeoutInterceptor());
  app.useGlobalPipes(new ValidationPipe());
  await app.listen(3000);
}
bootstrap();
