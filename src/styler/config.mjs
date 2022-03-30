import { isObj } from "../../utils/utils.mjs";

const configuration = {
    onError : function(err){},
    onUnsupported : function(err){},
    properties : {
        m : v => ({ margin : v}),
        mt : v => ({ marginTop : v}),
        mr : v => ({ marginRight : v}),
        mb : v => ({ marginBottom : v}),
        ml : v => ({ marginLeft : v}),
        p : v => ({ padding : v}),
        pt : v => ({ paddingTop : v}),
        pr : v => ({ paddingRight : v}),
        pb : v => ({ paddingBottom : v}),
        pl : v => ({ paddingLeft : v}),
        htwt : v => ({height:v, width:v}),
    },
    unitDefaults : {
        margin : "px",
        padding : "px",
        height : "%",
        width : "%",
        borderRadius : "px"
    },
    // addProperties(obj){
    //     Object.entries(obj).forEach(e => {
    //         const [key,val] = e; 
    //         this.properties[key] = val;
    //     });
    //     return this; 
    // },
    // addUnitDefaults(obj){
    //     Object.entries(obj).forEach(e => {
    //         const [key,val] = e; 
    //         this.unitDefaults[key] = val;
    //     });
    //     return this; 
    // }
};

export const config = new Proxy(configuration,{
    set(t,k,v){
        if (!(k in t)) return false;
        if (isObj(v)){
            t[k] = {...t[k], ...v}
        }
        else t[k]= v ;
        return true; 
    }
})

export default configuration;