import {Effect} from "./effects";
import { Modifiers, Props } from "./types";

export const isModifier = <T extends Props> (anything:any) : anything is Modifiers<T> => {
    return (
        anything instanceof Effect
    )
}

export const isProxySymbol = Symbol("isProxy");

export const isProps = <Props> (props:any) : props is Props => {
    return props && props[isProxySymbol];
}
