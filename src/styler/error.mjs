import css from "./css.mjs";

export class CSSDeclarationError extends Error {
    constructor(declaration){
        super(declaration)
        // new TypeEnforcer("string")(declaration); 
        const [prop,val] = declaration.replace(";","").split(":");
        const isSup = css.supportsProp(prop) ? "" : `(!) ${prop} is not a supported CSS Property.`; 
        const name = "CSSDeclarationError";
        const message = `"${prop}:${val}" is not a supported CSS Declaration\n${isSup}`;
        // super(message);

        this.name = name;
        this.message = message; 
    }
}

export class CSSStyleSheetError extends Error {
    constructor(message){
        super(message);
        this.name = "CSSStyleSheetError"; 
        this.message = message; 
    }
}