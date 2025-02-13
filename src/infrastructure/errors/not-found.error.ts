import HttpError from "./http.error";

export default class NotFoundError extends HttpError {
    constructor(description?: string) {
        super("Not Found", 404, description);
    }
}
