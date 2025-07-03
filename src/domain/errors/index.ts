import { ErrorCode } from "./error-code";

export class AppError extends Error {
    
    code: ErrorCode;
    details?: string;
    
    constructor(code: ErrorCode, message: string, details?: string) {
        super(message);
        this.code = code;
        this.details = details;
    }
}