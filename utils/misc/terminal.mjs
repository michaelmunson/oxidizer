import { Str } from "../extensions/str.mjs";


const ft = {
    "reset" : "\x1b[0m",
    "bold" : "\x1b[1m",
    "dim" : "\x1b[2m",
    "underscore" : "\x1b[4m",
    "blink" : "\x1b[5m",
    "reverse" : "\x1b[7m",
    "hidden" : "\x1b[8m"
}
const fg = {
    "black" : "\x1b[30m",
    "red" : "\x1b[31m",
    "green" : "\x1b[32m",
    "yellow" : "\x1b[33m",
    "blue" : "\x1b[34m",
    "magenta" : "\x1b[35m",
    "cyan" : "\x1b[36m",
    "white" : "\x1b[37m"
}
const bg = {  
    "black" : "\x1b[40m",
    "red" : "\x1b[41m",
    "green" : "\x1b[42m",
    "yellow" : "\x1b[43m",
    "blue" : "\x1b[44m",
    "magenta" : "\x1b[45m",
    "cyan" : "\x1b[46m",
    "white" : "\x1b[47m"
}
const symbols = {
    "mult":"×",
    "div":"÷",
    "plusmin":"±",
    "star" : "★",
    "check" : "✔︎",
    "x" : "✘",
    "arrow" : "→",
    "dblArrow" : "⇒",
    "finger" : "☞",
    "squareFilled" : "◼︎",
    "square" : "◻︎",
    "triUp" : "▲",
    "triRight" : "►",
    "triLeft" : "◀︎",
    "triDown" : "▼",
    "smile":"☺︎",
    "frown":"☹︎",
    "cloud":"☁︎",
    "spade":"♠︎",
    "club":"♣︎",
    "heart":"♥︎",
    "diamond":"♦︎",
    "crown":"♛",
    "knight":"♞",
    "dice1":"⚀",
    "dice2":"⚁",
    "dice3":"⚂",
    "dice4":"⚃",
    "dice5":"⚄",
    "dice6":"⚅",
    "plane":"✈︎",
    "sword":"⚔︎",
    "flagFilled":"⚑",
    "flag":"⚐",
    "peace":"☮︎",
    "peaceHand":"✌︎",
    "yinyang":"☯︎",
    "coffee":"☕︎",
}
const italic = {
    "a":"𝘢",
    "b":"𝘣",
    "c":"𝘤",
    "d":"𝘥",
    "e":"𝘦",
    "f":"𝘧",
    "g":"𝘨",
    "h":"𝘩",
    "i":"𝘪",
    "j":"𝘫",
    "k":"𝘬",
    "l":"𝘭",
    "m":"𝘮",
    "n":"𝘯",
    "o":"𝘰",
    "p":"𝘱",
    "q":"𝘲",
    "r":"𝘳",
    "s":"𝘴",
    "t":"𝘵",
    "u":"𝘶",
    "v":"𝘷",
    "w":"𝘸",
    "x":"𝘹",
    "y":"𝘺",
    "z":"𝘻",
    "A":"𝘼",
    "B":"𝘽",
    "C":"𝘾",
    "D":"𝘿",
    "E":"𝙀",
    "F":"𝙁",
    "G":"𝙂",
    "H":"𝙃",
    "I":"𝙄",
    "J":"𝙅",
    "K":"𝙆",
    "L":"𝙇",
    "M":"𝙈",
    "N":"𝙉",
    "O":"𝙊",
    "P":"𝙋",
    "Q":"𝙌",
    "R":"𝙍",
    "S":"𝙎",
    "T":"𝙏",
    "U":"𝙐",
    "V":"𝙑",
    "W":"𝙒",
    "X":"𝙓",
    "Y":"𝙔",
    "Z":"𝙕",
    map(str){
        let newStr = "";
        for (const i of str) newStr += (i in this) ? this[i] : i;
        return newStr; 
    }
}

export const consoleStrs = {ft,fg,bg,symbols,italic,}

/**
 * 
 * @param {String} strs - %fgColor,bgColor,other% string
 * @description Example: printf("%red,blue% foreground will be red, background will be blue", "%dim% text will be dimmed")
*/
export function printf(...strs){
    const getf = (str) => {
        let fbool = false;
        let stystr = ""; 
        let pstr = str;
        const s = new Str(str); 
        if (s.hasAny("%") && s.numOf("%") === 2){
            const stys = s.between("%");
            pstr = str.replace("%"+stys+"%","");
            if (pstr.startsWith(" ")) pstr = pstr.slice(1);  
            const styarr = stys.replaceAll(" ","").split(",");
            for (const st of styarr){
                if (st in ft){
                    stystr += ft[st];  
                }
                else if (st in fg){
                    if (fbool) stystr += bg[st]
                    else {
                        stystr += fg[st]; 
                        fbool = true; 
                    }
                }
            }
        }
        return stystr + pstr; 
    }
    let out = "";
    for (const str of strs) out+= getf(str)+ft.reset;
    console.log(out); 
}
/**
 * 
 * @param {String} strs - strings to print in terminal
 * */
export function print(...strs){
    let newStr = ""; 
    for (const str of strs) newStr+=(str); 
    console.log(newStr+ft.reset); 
}
/**
 * 
 * @param {String} strs - strings to print in terminal separated by newline
 * */
export function println(...strs){
    for (const str of strs) console.log(str);  
}

/**
 * 
 * @param  {...string} strs - list of strs to print, to style, use array [string,styles]
 * @description Example: log(["red",{color:"red"}],"normal") 
 */
export function log(...strs){
    const logarr = []
    for (const str of strs){
        if (Array.isArray(str)){
            const s = "%c"+str[0];   
            const obj = str[1]; 
            let sty = (typeof obj === "string") ? obj : ""; 
            if (typeof obj !== "string"){    
                for (const o in obj) sty+=new Str(o).camelCaseToDashed().toString()+":"+obj[o]+";"
            }
            logarr.push(...[s,sty]);
        }
        else if (typeof str === "string") logarr.push(str); 
    }
    console.log(...logarr); 
}



// const print = function(...toPrint){
//     if (toPrint.filter(l => Array.isArray(l)).length === 0){
//         toPrint = [toPrint]
//     }   
//     const msg = 
//         toPrint
//             .map(e => (!Array.isArray(e))?[e,ft.reset]:e)
//             .map(e => (e.length === 1)?[e[0],ft.reset]:e)
//             .map(e => (e.slice(1).join(""))+e[0]+ft.reset).join(" ");
//     console.log(msg);
// }

// print.error = msg => print(msg,fg.red);
// print.warn = msg => print(msg,fg.yellow);
// print.success = msg => print(msg,fg.green);
// print.invert = {
//     error : msg => print(msg,bg.red), 
//     warn : msg => print(msg,fg.yellow), 
//     success:msg => print(msg,fg.green),
// }

// const terminal = {print,styleStrings:terminalStyleStrings,}
// export { print, terminalStyleStrings, fg, bg, ft, sym, itl,terminal};
// export default terminal

