// Your code goes here
const data = [
    {
      "_id": "5b5e3168c6bf40f2c1235cd6",
      "index": 0,
      " birthday ": '2016-03-18T00:00:00',
      "eyeColor": "green",
      "name": "Stein",
      "favoriteFruit": "apple"
    },
    {
      "_id": "5b5e3168e328c0d72e4f27d8",
      "index": 1,
      " birthday ": '1991-02-11T00:00:00',
      "eyeColor": "blue",
      "name": "Cortez",
      "favoriteFruit": "strawberry"
    },
    {
      "_id": "5b5e3168cc79132b631c666a",
      "index": 2,
      " birthday ": '1984-04-17T00:00:00',
      "eyeColor": "blue",
      "name": "Suzette",
      "favoriteFruit": "apple"
    },
    {
      "_id": "5b5e31682093adcc6cd0dde5",
      "index": 3,
      " birthday ": '1994-04-17T00:00:00',
      "eyeColor": "green",
      "name": "George",
      "favoriteFruit": "banana"
    }
  ]
// Task 0
function getNumbers(string) {
    let arr = [];
    for(let i = 0; i < string.length; i++){
        if(string[i] >= 0 || string[i] <= 0){
            arr.push(+string[i]);
        }
    }
    return arr;
}

// Task 1
function findTypes() {
    let object = {};
    for(let i = 0; i < arguments.length; i++){
        let key = typeof arguments[i];
        if(object.hasOwnProperty(key)){
            object[key] = 1;
        }else{
            object[key] = 1;
        }
    }
    return object;
}
// Task 2
function executeforEach(arr, func) {
    for(let i = 0; i < arr.length; i++){
        func(arr[i]);
    }
}
//Task 3
function mapArray(arr, func) {
    let Array = [];
    executeforEach(arr, el => Array.push(func(el)));
    return Array;
}
// Task 4
function filterArray(arr, func) {
    let arrFilter = [];
    executeforEach(arr, (a) => {
        if(func(a)){
            arrFilter.push(a);
        }
    });
    return arrFilter;
}
//Task 5
function showFormattedDate(formatDate) {
    let month = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    console.log(`Date: ${month[formatDate.getMonth()]} ${formatDate.getDate()} ${formatDate.getFullYear()} `);
}
//Task 6
function canConvertToDate(string){
    let date = new Date(string);
    date = date.toDateString();
    return date !== 'Invalid Date';
}
// Task 7
function daysBetween(dat1, dat2){
 let date1 = dat1.getTime();
 let date2 = dat2.getTime();
 let difference = date1 - date2;
 let perDayMs = 1000 * 60 * 60 * 24;

    difference = Math.abs(Math.floor(difference / perDayMs));

 return difference;
}
// Task 8
function getAmountOfAdultPeople(data){
    // let foundProp = ' birthday ';
    let listPeople = 0;

  filterArray(data, function(index) {
      if( index.hasOwnProperty('birthday') ) {
        let dateNow = new Date();
        let birthDay = new Date(index[birthday]);
        let personAge = daysBetween(birthDay, dateNow ) / 365;
        if (personAge >= 18) {
          listPeople++;
        }
      }
  });

  return listPeople;
}
// Task 9
function keys(arr) {
    let object = [];
    for (let keys in arr) {
        if (arr.hasOwnProperty(keys)) {
            object.push(keys);
        }
    }
    return object;

}
// Task 10
function values(arr) {
    let object = [];
    for (let values in arr) {
        if (arr.hasOwnProperty(values)) {
            object.push(arr[values]);
        }
    }
    return object;
}