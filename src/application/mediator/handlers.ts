import { Mediator } from "./mediator";

export interface Request<TResponse = void> {};

export abstract class RequestHandler<TRequest extends Request<TResponse>, TResponse = void> {
    abstract handle(request: TRequest): Promise<TResponse>;
}

export function RequestHandlerFor<TRequest extends Request<TResponse>, TResponse>(
    requestType: new (...args: any[]) => TRequest
) {
    return function (handler: new() => RequestHandler<any, any>) {
        Mediator.requestHandlersMap.set(requestType, handler);
    };
}
