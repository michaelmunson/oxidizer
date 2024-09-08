export function camelToDashed(input:string) {
    return input.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
}

export function dashedToCamel(input: string): string {
    return input.replace(/-([a-z])/g, (match, group) => group.toUpperCase());
}

export function getMethods(obj:any) : string[] {
    const ignore = [
        "__defineGetter__",
        "__defineSetter__",
        "hasOwnProperty",
        "__lookupGetter__",
        "__lookupSetter__",
        "isPrototypeOf",
        "propertyIsEnumerable",
        "toString",
        "valueOf",
        "toLocaleString",
        "constructor",
        "render",
        "connectedCallback",
        "disconnectedCallback",
        "adoptedCallback",
        "attributeChangedCallback"
    ];
    const properties = new Set()
    let currentObj = obj;
    do {
        Object.getOwnPropertyNames(currentObj).map(item => properties.add(item))
    } while ((currentObj = Object.getPrototypeOf(currentObj)))
    return [...properties.keys()].filter((item:any) => typeof obj[item] === 'function' && !(ignore.includes(item))) as string[]
}

export function generateRandomId(length: number, inUse?:string[]): string {
    const characters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let randomId = '';
  
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      randomId += characters.charAt(randomIndex);
    }
  
    if (inUse)
        return inUse.includes(randomId) ? generateRandomId(length) : randomId;
    else
        return randomId;
}
  