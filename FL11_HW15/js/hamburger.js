function Hamburger(type, calories){
    let _calories = calories;
    let cheeseCalories = 120;
    let cheese = false;

    this.getCalories = () => _calories;
    this.setCalories = (caloriesValue) => _calories = caloriesValue;
    this.addCheese = () =>{
        if(!cheese){
             _calories += cheeseCalories;
             cheese = true;
        }else{
            console.log('Sorry, you can add cheese only once.');
        }
    }
    this.type = type;
    
}

const myHamburger = new Hamburger('classic', 600);
// console.log(myHamburger.getCalories());
// myHamburger.setCalories(700);
// console.log(myHamburger.getCalories());
myHamburger.addCheese();
console.log(myHamburger.getCalories());
myHamburger.addCheese();