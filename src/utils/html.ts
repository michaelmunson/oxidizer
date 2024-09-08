
export function html(strs:TemplateStringsArray, ...values:any[]){
    return strs.map((s, i) => s + (values[i] ?? "")).join('')
}