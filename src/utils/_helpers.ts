export function camelToDashed(input:string) {
    return input.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
}

export function dashedToCamel(input: string): string {
    return input.replace(/-([a-z])/g, (match, group) => group.toUpperCase());
}

export function strictQuery<T extends HTMLElement>(selector:string){
    if (typeof selector !== 'string'){
        throw new TypeError('Selector must be of type string');
    }
    const element = document.querySelector(selector) as T | null;
    if (!element){
        throw new ReferenceError(`No element found matching selector "${selector}"`)
    }
    return element;
}