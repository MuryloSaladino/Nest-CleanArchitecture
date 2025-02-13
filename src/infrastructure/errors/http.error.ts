import { IErrorFormat } from "src/domain/interfaces/errors.interface";

export default class HttpError extends Error implements IErrorFormat {
    statusCode: number;
    description?: string;

    constructor(message: string, status: number = 400, description?: string) {
        super(message);
        this.statusCode = status;
        this.description = description;
    }
}
