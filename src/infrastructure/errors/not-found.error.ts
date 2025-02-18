import HttpError from "./http.error";

export default class NotFoundError extends HttpError {
    constructor(details?: string | string[]) {
        super("Not Found", 404, details);
    }
}
