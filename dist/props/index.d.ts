import { type Modifiers } from "./utils";
export { createEffect } from "./effects";
/**
 * @description creates a props proxy that is used to update the state of a component
 * @example
 * ```typescript
const props = createProps({count: 0});
// update state by simply setting a property value
props.count = 1;
```
 */
export declare function createProps<T extends {}>(input: T, modifiers?: Modifiers<T>): T;
