import { assignMethods, assignPrimitives, assignProperties, assignToNode, createNode, formatTag, nodeMethods, nodeProperties, parseDOMString } from "./html/htmlUtils.mjs";

export default function html (strings, ...values) {
    let DOMString = [...strings];
    for (const i in values) {
        DOMString[i] += values[i];
    }
    DOMString = DOMString.join("");

    return {
        DOMString,
        strings,
        values,
        nodes: parseDOMString(DOMString),
        htmlit: true
    }
}

Object.assign(
    html, {
        properties: nodeProperties,
        methods: nodeMethods,
        create: createNode,
        assign: assignToNode,
        parse: parseDOMString,
        formatTag,
        assignMethods,
        assignPrimitives,
        assignProperties
    }
);

/*
html.properties = nodeProperties;
html.methods = nodeMethods;

html.create = createNode;
html.assign = assignToNode;

html.assignProperties = assignProperties;
html.assignMethods = assignMethods;
html.assignPrimitives = assignPrimitives;
html.parseDOMString = parseDOMString;
html.formatTag = formatTag;
*/
