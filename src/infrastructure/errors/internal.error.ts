import HttpError from "./http.error";

export default class InternalError extends HttpError {
    constructor(details?: string | string[]) {
        super("Internal Server Error", 500, details);
    }
}
