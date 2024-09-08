export class Effect<T extends {}> {
    dependencies: (keyof T)[];
    constructor(dependencies:(keyof T)[] | keyof T, public callback: (props:T) => Partial<T>|void){
        this.dependencies = !Array.isArray(dependencies) ? [dependencies] : dependencies;
    }
    isRun(key: keyof T){
        return this.dependencies.includes(key);
    }
    run(props:T){
        return this.callback.call({}, props);
    }
}

export function createEffect<T extends {}>(...params:ConstructorParameters<typeof Effect<T>>){
    return new Effect<T>(...params);
}
