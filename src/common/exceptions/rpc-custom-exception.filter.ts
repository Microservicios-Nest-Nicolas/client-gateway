import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpStatus,
} from '@nestjs/common';
import { RpcException } from '@nestjs/microservices';

@Catch(RpcException)
export class RpcCustomExceptionFilter implements ExceptionFilter {
  catch(exception: RpcException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse();
    const rpcError = exception.getError();

    //! Manejamos el error(microservicio caido) sin mostrar informacion del microservicio
    if (rpcError.toString().includes('Empty response')) {
      return response.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
        status: HttpStatus.INTERNAL_SERVER_ERROR,
        message: rpcError
          .toString()
          .substring(0, rpcError.toString().indexOf('(') - 1),
      });
    }

    if (
      typeof rpcError === 'object' &&
      'status' in rpcError &&
      'message' in rpcError
    ) {
      const status = isNaN(Number(rpcError.status)) ? 400 : rpcError.status;
      return response.status(status).json(rpcError);
    }
    response.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
      message: rpcError,
      status: HttpStatus.INTERNAL_SERVER_ERROR,
    });
  }
}
