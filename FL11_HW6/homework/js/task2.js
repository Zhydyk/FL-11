// Your code goes here
const a = +prompt('Enter first side of triangle','');
const b = +prompt('Enter second side of triangle','');
const c = +prompt('Enter third side of triangle','');

if (a === b || a === c || b === c) {
    console.log('Isosceles triangle');
} else if (a === b && b === c) {
    console.log('Eequivalent triangle');
} else if (a <= 0 || b <= 0 || c <= 0) {
    console.log('Triangle doesn’t exist');
} else {
    console.log('Normal triangle');
}