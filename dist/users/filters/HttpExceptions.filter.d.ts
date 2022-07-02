import { ArgumentsHost } from "@nestjs/common";
import { ExceptionFilter, HttpException } from "@nestjs/common";
export declare class HttpExceptionFilter implements ExceptionFilter {
    catch(exception: HttpException, host: ArgumentsHost): void;
}
