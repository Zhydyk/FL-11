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

//Task 5 find unique elements
function findUniqueElements(elem) {
    // return elem.filter((value, index, self) => { 
    //   return self.indexOf(value) === index;
    // });
    let arr = [...new Set(elem)];
    return arr;
  }
const array = [1, 1, 2, 2, 11, 15, 22, 24, 24, 15, 18, 6, 7, 1];
console.log(findUniqueElements(array));

//Task 6 Hide Number
function hideNumber(number){
    let phoneNum = number.slice(6);
    let star = '*';
    let hideNum = phoneNum.padStart(10,star);
    return hideNum;
}
const phoneNumber = '0123456789';
console.log(hideNumber(phoneNumber));

//Task 7 
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