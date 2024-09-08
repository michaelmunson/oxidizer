import fs from "fs";
import * as data from "./data";

const outDir = 'elements.out';

function jsdoc(...lines:string[]){
    return [
        '/**',
        ...lines.map(line => ` * ${line}`),
        ' */'
    ].join('\n')
}

function createExample(tag:string, instance:string){
    const voidElements = 'area , base , br , col , command , embed , hr , img , input , keygen , link , meta , param , source , track , wbr'.split(' , ');
    if (voidElements.includes(tag)){
        return [
            '@example ```typescript',
            `const ${tag}Element = ${tag.toUpperCase()}({className: '${tag}'});`,
            '```'
        ]
    } else {
        return [
            '@example',
            '```typescript',
            `const ${tag}:${instance} =`,
            `    ${tag.toUpperCase()}(`,
            `        {className: '${tag}'},`,
            `        'Hello',`,
            `        SPAN({style:{color:'red'}}, 'World')`,
            `    )`,
            `\n// with props\n`,
            `const props = createProps({name: 'snakgoat', color: 'red'});`,
            `const $${tag} = `,
            `    ${tag.toUpperCase()}(props, p => [`,
            `        {style: {color: p.color}},`,
            `        SPAN(p.name)`,
            `    ])`,
            '```'
        ]
    }
}

(() => {
    const lines:string[] = [
        'import { createElementFactory } from "./utils";\n\n'
    ];
    for (const element in data.elements){
        const instance = data.elements[element];
        const tag = element.toLowerCase()
        lines.push(...[
            jsdoc(
                `#### ${instance}`,
                '```html',
                `<${tag}>`,
                '```',
                `@description creates an \`${instance}\` instance.`,
                ...createExample(tag, instance)
            ),
            `export const ${element} = createElementFactory("${tag}")`
        ]);
    }
    fs.writeFileSync(outDir, lines.join('\n'))
})();
