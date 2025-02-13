import HttpError from "./http.error";

export default class InternalError extends HttpError {
    constructor(description?: string) {
        super("Internal Server Error", 500, description);
    }
}
