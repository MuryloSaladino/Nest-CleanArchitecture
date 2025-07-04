import { Mediator } from "./mediator";

export interface Event {};

export abstract class EventHandler<TEvent extends Event> {
    abstract handle(event: TEvent): Promise<void>;
}

export function EventHandlerFor<TEvent extends Event>(
    eventType: new (...args: any[]) => TEvent
) {
    return function (handler: new() => EventHandler<any>) {
        Mediator.eventHandlersMap.set(eventType, handler);
    };
}
