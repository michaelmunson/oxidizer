import { Effect } from "./effects";
export type Modifiers<T extends {}> = (Effect<T>)[];
export declare const isModifier: <T extends {}>(anything: any) => anything is Modifiers<T>;
export declare const isProxySymbol: unique symbol;
export declare const isProps: <Props>(props: any) => props is Props;
