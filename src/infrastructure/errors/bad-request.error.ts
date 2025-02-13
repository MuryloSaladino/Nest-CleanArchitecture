import HttpError from "./http.error";

export default class BadRequestError extends HttpError {
    constructor(description?: string) {
        super("Bad Request", 400, description);
    }
}
