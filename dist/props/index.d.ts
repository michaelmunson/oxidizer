import { type Modifiers } from "./utils";
export { createEffect } from "./effects";
export declare function createProps<T extends {}>(input: T, modifiers?: Modifiers<T>): T;
