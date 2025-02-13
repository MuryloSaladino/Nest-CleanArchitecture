import HttpError from "./http.error";

export default class UnauthorizedError extends HttpError {
    constructor(description?: string) {
        super("Unauthorized", 401, description);
    }
}
