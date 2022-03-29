import { Typevout, TypeEnforcer } from "../../utils/utils.mjs";

export const argvout = new Typevout({
    '{}' : a => { return { props:a[0],descendants:[] } },
    '[]' : a => { return { props:{},descendants:a[0] } },
    '{},[]' : a => { return { props:a[0],descendants:a[1] } },
    '[],[]' : a => { return { props:a[0],descendants:a[1] } },
    '$' : a => { return {props:{}, descendants:a[0] } },
    '{},$' : a => { return {props:a[0], descendants:a[1] } },
    'null' : a => { return { props:{}, descendants:[] } },
    '{},HTMLElement' : a => { return {props:a[0],descendants:[a[1]]} },
    'HTMLElement' : a => { return {props:{}, descendants: [a[0]]} },
    '?' : a => {throw new Error(a)}
});

export const argvenf = (props,descendants) => {
    new TypeEnforcer('Object')(props);
    new TypeEnforcer('array','HTMLElement')(descendants);
}

