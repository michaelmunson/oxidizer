import { $Map, isArr, isObj } from "../../utils/utils.mjs";
import { StylerSheet} from "./stylerSheet.mjs";



export class StylerRouter extends $Map {
    constructor(routes){
        super()
        this.setRoutes(routes); 
        this.routeIterator = this.entries();
        this.cache = {}; 
    }
    addRoute(name,route){
        console.log(name)
        this.set(name, new StylerSheet(route)); 
        return this; 
    }
    setRoutes(routes){
        if (isObj(routes)){
            for (const r in routes){
                console.log(r, routes[r])
                this.addRoute(r,routes[r]); 
            }
        }
        else if (isArr(obj)){
            for (const r of routes){
                const [name,fact] = r; 
                this.addRoute(name, fact); 
            }
        }
        return this
    }
    renderNext(...argv){
        return this.render(this.routeIterator.next()[0],argv); 
    }
    render(route, ...argv){
        if (!this.get(route)) throw new Error("No router has been added");
        [...this.values()].forEach(v => v.clear())
        this.activeRoute = this.get(route).render(...argv);
        this.cache[route] = this.activeRoute; 
        return this; 
    }
}

export default StylerRouter