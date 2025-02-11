import {
    ArgumentsHost,
    Catch,
    ExceptionFilter,
    HttpException,
    HttpStatus
} from "@nestjs/common";
import { Request, Response } from "express";

import { LoggerService } from "../services/logger.service";


@Catch()
export default class AllExceptionsFilter implements ExceptionFilter {
    constructor(
        private readonly logger: LoggerService,
    ) { }

    catch(error: unknown, host: ArgumentsHost) {
        const ctx = host.switchToHttp();
        const response = ctx.getResponse<Response>();
        const request: any = ctx.getRequest<Request>();

        const status =
            error instanceof HttpException
                ? error.getStatus()
                : HttpStatus.INTERNAL_SERVER_ERROR;
        const message =
            error instanceof HttpException
                ? error.getResponse()
                : { message: 'Internal server error'};

        const responseData = {
            statusCode: status,
            timestamp: new Date().toISOString(),
            path: request.url,
            message,
        };

        this.logMessage(request, message, status, error as Error);

        response.status(status).json(responseData);
    }

    private logMessage(request: any, message: string | object, status: number, error?: Error) {
        if (status === 500) {
            this.logger.error(
                `End Request for ${request.path}`,
                `method=${request.method} status=${status} message=${message}`,
                error?.stack
            );
        } else {
            this.logger.warn(
                `End Request for ${request.path}`,
                `method=${request.method} status=${status} message=${message}`
            );
        }
    }
}