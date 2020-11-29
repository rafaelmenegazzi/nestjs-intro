import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpException,
  HttpStatus,
} from '@nestjs/common';

@Catch()
export class ExceptionsLogger implements ExceptionFilter {
  catch(exception: unknown, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse();
    const request = ctx.getRequest();

    const [statusCode, exceptionResponse] =
      exception instanceof HttpException
        ? [exception.getStatus(), exception.getResponse()]
        : [
            HttpStatus.INTERNAL_SERVER_ERROR,
            {
              statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
              message: 'Internal Server Error',
            },
          ];

    const responseJson = {
      statusCode,
      ...(exceptionResponse instanceof Object
        ? exceptionResponse
        : { message: exceptionResponse }),
    };
    console.error(exception);
    console.log({
      error: {
        ...responseJson,
        path: request.url,
        timestamp: Date.now().toString(),
      },
    });
    response.status(statusCode).json(responseJson);
  }
}
