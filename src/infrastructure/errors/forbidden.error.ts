import HttpError from "./http.error";

export default class ForbiddenError extends HttpError {
    constructor(description?: string) {
        super("Forbidden", 403, description);
    }
}
