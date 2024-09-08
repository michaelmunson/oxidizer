import fs from "fs";
import * as data from "./data";

const outDir = '.out'

const write = (fileName:string, text:string) => {
    fs.writeFileSync(`${outDir}/${fileName}`, text);
}

const buildElements = () => {
    const outFileName = "elements";
    const outTextArray:string[] = [];
    const {elements} = data; 
    for (const name in elements){
        const htmlObject = elements[name];
        const template = `
            ${name}<Props=undefined>(
                fields?:Fields<${htmlObject}, Props>|Children<Props>|TemplateStringsArray, 
                children?:Children<Props>
            ) : Intrinsic<${htmlObject}, Props> {
                
                return create<${htmlObject},Props>('${name.toLowerCase()}', fields, children);
            },`;
        outTextArray.push(template);
    }
    const outText = `
    export const Elements = {
        ${outTextArray.join("")}
    } as const;
    `;

    write(outFileName, outText);
}

buildElements(); 
