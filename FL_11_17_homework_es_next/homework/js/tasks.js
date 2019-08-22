//Task 1 Max Elements
function maxElement(elem){
    let maxEl = Math.max(...elem);
    return maxEl;
    
}
const array = [1, 2, 3, 4, 56, 7, 45, 281, 456, 1000, 9, 567, 2];
console.log(maxElement(array));

//Task 2 Copy Array
function copyArray(array){
    let newArray = [...array];
    return newArray;
}
const array1 = [1, 2, 3];
const copiedArray = copyArray(array1);
console.log(array1, copiedArray);
console.log(array1 === copiedArray);

//Task 3 
function addUniqueId(obj){
    const  copyObj = Object.assign({}, obj, {
        'id': Symbol()
    });
    return copyObj;
    
}
addUniqueId({name: 123});
addUniqueId({name: 1235});

//Task4
function regroupObject(obj){
    let newObj = {
        age: obj.details.age,
        details: {
            name: obj.name,
            university: obj.details.university,
            id:1
            
        }
    }
    return newObj;
}
const oldObj = {name: 'Someone', details: {id: 1, age: 11, university: 'UNI'}};
console.log(regroupObject(oldObj));

//Task 5 
function findUniqueElements(elem) {
    
    let arr = [...new Set(elem)];
    return arr;
  }
const array = [1, 1, 2, 2, 11, 15, 22, 24, 24, 15, 18, 6, 7, 1];
console.log(findUniqueElements(array));

//Task 6
function hideNumber(number){
    let phoneNum = number.slice(-4);
    let star = '*';
    let hideNum = phoneNum.padStart(10,star);
    return hideNum;
}
const phoneNumber = '0123456789';
console.log(hideNumber(phoneNumber));

//Task 7 
function required(){
    throw new Error('Missing property');
}
function add(a=require(), b=require()){
        return a + b;    
}
console.log(add(1,5));
console.log(add(1));

//Task 8 
function fetchJson(url){
    return fetch(url)
    .then(request => request.text())
    .then(text => JSON.parse(text))
    .catch(error => console.log(`ERROR${error.stack}`));
}
fetchJson('https://api.github.com/users/Zhydyk/repos').then(res => console.log(res));

// Task 9 
async function fetchJson(url){
    try{
        const request = await fetch(url);
        const text = await request.text();
        return JSON.parse(text);    
    }
    catch (error){
        console.log(`ERROR${error.stack}`);
    }
}
fetchJson('https://api.github.com/users/Zhydyk/repos').then(res => console.log(res));