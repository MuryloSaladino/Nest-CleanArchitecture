import { Event, EventHandler } from "./events";
import { Request, RequestHandler } from "./handlers";

export class Mediator {

    static requestHandlersMap = new Map<Request, new() => RequestHandler<any, any>>();
    static eventHandlersMap = new Map<Event, new() => EventHandler<any>>();

    async send<TRequest extends Request<TResponse>, TResponse>(request: TRequest): Promise<TResponse> {

        const HandlerClass = Mediator.requestHandlersMap.get(request.constructor);

        if (!HandlerClass) throw new Error(`No handler mapped for ${request.constructor.name}`);

        return await new HandlerClass().handle(request);
    }

    async trigger<TEvent extends Event>(event: TEvent): Promise<void> {

        const HandlerClass = Mediator.eventHandlersMap.get(event);

        if (!HandlerClass) throw new Error(`No handler mapped for ${event.constructor.name}`);
        
        return await new HandlerClass().handle(event);
    }
}
