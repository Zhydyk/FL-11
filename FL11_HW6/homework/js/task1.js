// Your code goes here
const numberA1 = +prompt('Enter coordinates A(x)');
const numberA2 = +prompt('Enter coordinates A(y)');
const numberB1 = +prompt('Enter coordinates B(x)');
const numberB2 = +prompt('Enter coordinates B(y)');
const numberC1 = +prompt('Enter coordinates C(x)');
const numberC2 = +prompt('Enter coordinates C(y)');

const dividerNumber = 2;

if((numberA1 + numberB1)/dividerNumber === numberC1 && (numberA2 + numberB2)/dividerNumber === numberC2){
    console.log(true);
} else{
    console.log(false);
}