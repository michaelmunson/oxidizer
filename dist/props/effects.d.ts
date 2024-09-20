import { Props } from "./types";
export declare class Effect<T extends Props> {
    callback: (props: T) => Partial<T> | void;
    dependencies: (keyof T)[];
    constructor(dependencies: (keyof T)[] | keyof T, callback: (props: T) => Partial<T> | void);
    isRun(key: keyof T): boolean;
    run(props: T): void | Partial<T>;
}
/**
 * @description
 * * creates an "effect", or a function that will be ran when a props property has been changed.
 * * effect callbacks will be ran immediately upon creation
 * * the return value of the callback will be applied to the props
 * @example
 * ```typescript
    const props = createProps({count: 0}, [
        // keep count >= 0 and <= 100
        createEffect(['count'], $ => {
            if ($.count < 0){
                $.count = 0;
            }
            if ($.count > 100) return {
                count: 100
            }
        })
    ]);
    // props will be set to 0
    props.count = -10;
    // props will be set to 100
    props.count = 110;
```
 */
export declare function createEffect<T extends Props>(...params: ConstructorParameters<typeof Effect<T>>): Effect<T>;
