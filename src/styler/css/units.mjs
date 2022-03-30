import lexicon from "./css-data.json";
import { Str } from "../../../utils/utils.mjs";

export class Unit {
    [Symbol.toPrimitive](hint) {
        return this.value; 
    }
    static units = lexicon.units;
    static types = {
        flex : ['fr'],
        angle : ['deg','grad','rad','turn'],
        frequency : ['Hz','kHz'],
        lengthRelative : ['vh','vw','vb','vmin','vmax','em','ch','rem','ex','ic','lh','cap'],
        lengthAbsolute : ['px','cm','mm','Q','in','pc','pt'],
        percent : ['%','percent'],
        time : ['s','ms'],
        resolution : ['dpi','dpcm','dppx'],
    }
    static #UnitNameError = class InvalidUnitError extends Error {
        constructor(message) {
            super(message); // (1)
            this.name = "InvalidUnitError"; // (2)
        }
    }
    static #UnitConversionError = class UnitConversionError extends Error {
        constructor(message) {
            super(message); // (1)
            this.name = "UnitConversionError"; // (2)
        }
    }
    constructor(value,unit=""){
        const unitStr = value.toString() + unit;  
        this.value = Unit.parseValue(unitStr); 
        this.unit = Unit.parseUnit(unitStr);
        const conversions = Unit.units[this.unit];
        for (let i in conversions){
            const newUnitValue = this.value * Unit.parseValue(conversions[i]); 
            Object.defineProperty(this,i,
                {
                    get:function(){
                        return new Unit(newUnitValue,i)
                    }
                }
            );
        }
    }
    add(value){
        if (typeof value === 'number'){
            this.value = this.value+value;
            return this
        }
        else if (typeof value === 'string'){
            const u = new Unit(value);
            return this.add(u); 
        }
        else if (value instanceof Unit){
            if (value.type(this.type())){
                value = value[this.unit].value; 
                return this.add(value);
            }
            else {
                throw new Unit.#UnitConversionError(`"${this.unit}" cannot be converted to "${value.unit}"`);
            }
        }
    }
    div(value){
        if (typeof value === 'number'){
            this.value = this.value/value
        }
        else if (typeof value === 'string'){
            const u = new Unit(value);
            return this.div(u); 
        }
        else if (value instanceof Unit){
            if (value.type(this.type())){
                value = value[this.unit].value; 
                return this.div(value);
            }
            else {
                throw new Unit.#UnitConversionError(`"${this.unit}" cannot be converted to "${value.unit}"`);
            }
        }
    }
    mul(value){
        if (typeof value === 'number'){
            this.value = this.value*value
        }
        else if (typeof value === 'string'){
            const u = new Unit(value);
            return this.mul(u); 
        }
        else if (value instanceof Unit){
            if (value.type(this.type())){
                value = value[this.unit].value; 
                return this.mul(value);
            }
            else {
                throw new Unit.#UnitConversionError(`"${this.unit}" cannot be converted to "${value.unit}"`);
            }
        }
    }
    sub(value){
        if (typeof value === 'number'){
            this.value = this.value-value
        }
        else if (typeof value === 'string'){
            const u = new Unit(value);
            return this.sub(u); 
        }
        else if (value instanceof Unit){
            if (value.type(this.type())){
                value = value[this.unit].value; 
                return this.sub(value);
            }
            else {
                throw new Unit.#UnitConversionError(`"${this.unit}" cannot be converted to "${value.unit}"`);
            }
        }
    }
    to(unit){

        if (Unit.types[this.type()].includes(unit)){
            return this[unit]; 
        }
        else {
            throw new Unit.#UnitConversionError(`"${this.unit}" cannot be converted to "${unit}"`);
        }
    }
    compare(unit){
        unit = new Unit(unit.toString())
        if (Unit.types[this.type()].includes(unit.unit)){
            const otherValue = unit[this.unit].value;
            if (this.value > otherValue){
                return 1; 
            }
            else if (this.value === otherValue){
                return 0; 
            }
            else {
                return -1; 
            }
        }
        else {
            throw new Unit.#UnitConversionError(`"${this.unit}" cannot be converted to "${unit}"`);
        } 
    }
    equals(unit){
        return (this.compare(unit) === 0)
    }
    gt(unit){
        return (this.compare(unit) === 1)
    }
    lt(unit){
        return (this.compare(unit) === -1)
    }
    calc(fn,set=false){
        const val = fn.call(this,this.value); 
        const value =  new Unit(val,this.unit);
        if (set){
            this.value = value;
        } 
        return value;  
        
    }
    toString(){
        return this.value + this.unit; 
    }
    valueOf(){
        return this.toString()
    }
    type(someType=null){
        if (someType){
            return this.type() === someType; 
        }
        for (let i in Unit.types){
            if (Unit.types[i].includes(this.unit)){
                return i; 
            }
        }
    }
    static parseValue(unitString){
        return parseFloat(unitString.toString().replace(/[a-zA-Z]/g,''));
    }
    static parseUnit(unitString){
        const unit = unitString.toString().replace(/[0-9]/g,'').replaceAll('.','').trim();
        if (!(unit in Unit.units)){
            throw new Error(`Invalid Unit: ${unit} is not a recognized CSS Unit.`)
        }
        return unit; 
    }
    static parse(unitString){
        unitString = unitString.replaceAll('%','percent').toString();
        return {
            value : Unit.parseValue(unitString),
            unit : Unit.parseUnit(unitString)
        }
    }
    static extract(str=""){
        return [...str.matchAll(/[0-9]+\s*(Hz|Q|ch|cm|deg|dpcm|dpi|dppx|em|ex|fr|grad|in|kHz|mm|ms|number|pc|percent|pt|px|rad|rem|s|turn|vh|vmax|vmin|vw)/g)].map(f=>new Unit(f[0]))
    }
}

Object.assign(Unit,lexicon.units)

export default Unit; 