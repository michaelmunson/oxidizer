import { Modifiers, Props } from "./types";
export declare const isModifier: <T extends Props>(anything: any) => anything is Modifiers<T>;
export declare const isProxySymbol: unique symbol;
export declare const isProps: <Props>(props: any) => props is Props;
