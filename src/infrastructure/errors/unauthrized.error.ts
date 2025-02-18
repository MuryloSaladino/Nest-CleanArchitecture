import HttpError from "./http.error";

export default class UnauthorizedError extends HttpError {
    constructor(details?: string | string[]) {
        super("Unauthorized", 401, details);
    }
}
