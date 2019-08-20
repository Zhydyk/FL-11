const obj1 = { prop: 5 };
const obj2 = create(obj1);

function create(proto, propertiesObject){
    if(typeof proto !== 'object' && typeof proto !== 'function'){
        throw new TypeError(`An object prototype can only an object` + proto);
    }else if(proto === null){
        throw new Error(`Dosn't support 'null' as the first argument`);
    }
    if(typeof propertiesObject !== 'undefined'){
        throw new Error(`Doesn't support second argument`);
    }
    function F(){}
    
    F.prototype = proto;
    
    return new F();
}
console.log(Object.getPrototypeOf(obj2) === obj1);
console.log(obj2.prop); 