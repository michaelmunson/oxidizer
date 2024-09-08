export declare class Effect<T extends {}> {
    callback: (props: T) => Partial<T> | void;
    dependencies: (keyof T)[];
    constructor(dependencies: (keyof T)[] | keyof T, callback: (props: T) => Partial<T> | void);
    isRun(key: keyof T): boolean;
    run(props: T): void | Partial<T>;
}
export declare function createEffect<T extends {}>(...params: ConstructorParameters<typeof Effect<T>>): Effect<T>;
