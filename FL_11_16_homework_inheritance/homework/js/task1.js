const defaults = { a: 123, b: 777 };
const options = { a: 456 };

function assign (target) {
    if(target === null || target === undefined){
        throw new Error(`Can't converte null or underfined to object`);
    }
    let to = Object(target);
    for(let i = 0; i < arguments.length; i++){
        let nextSource = arguments[i];
        if(nextSource !== null || nextSource !== undefined){
            for(let key in nextSource){
                if(Object.prototype.hasOwnProperty.call(nextSource, key)){
                    to[key] = nextSource[key];
                }
            }
        }
    }
    return to;
}

const configs = assign({}, defaults, options); 
console.log(configs);
