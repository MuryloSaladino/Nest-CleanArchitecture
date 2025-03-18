import { HttpException } from "@nestjs/common";
import { IErrorFormat as IAppError } from "src/domain/interfaces/errors.interface";

export class HttpError extends HttpException implements IAppError {
    details?: string | string[];

    constructor(message: string, status: number = 400, details?: string | string[]) {
        super(message, status);
        this.details = details;
    }
}
