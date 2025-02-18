import HttpError from "./http.error";

export default class ForbiddenError extends HttpError {
    constructor(details?: string | string[]) {
        super("Forbidden", 403, details);
    }
}
