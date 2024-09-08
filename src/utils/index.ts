export {css} from './css';
export {html} from './html'

export function camelToDashed(input:string) {
    return input.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
}

export function dashedToCamel(input: string): string {
    return input.replace(/-([a-z])/g, (match, group) => group.toUpperCase());
}
