import {Effect} from "./effects";

export type Modifiers<T extends {}> = (
    Effect<T>
)[];

export const isModifier = <T extends {}> (anything:any) : anything is Modifiers<T> => {
    return (
        anything instanceof Effect
    )
}

export const isProxySymbol = Symbol("isProxy");

export const isProps = <Props> (props:any) : props is Props => {
    return props && props[isProxySymbol];
}
