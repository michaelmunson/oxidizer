
export class CSSUnsupportedError extends Error {
    constructor (declaration) {
        super(declaration)

        const name = 'CSSDeclarationError'
        const message = `"${declaration}" is not a supported CSS Declaration`;
        // super(message);
        this.name = name
        this.message = message
    }
}
export class CSSRuleError extends Error {
    constructor (message) {
        super(message)
        this.name = 'CSSRuleError'
        this.message = message
    }
}
export class CSSStyleSheetError extends Error {
    constructor (message) {
        super(message)
        this.name = 'CSSStyleSheetError'
        this.message = message
    }
}
