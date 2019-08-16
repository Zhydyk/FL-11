class Hamburger{
    constructor(type, calories, typeSecretIngredient){
        let _calories = calories;
        let cheeseCalories = 120;
        let tomatoCalories = 20;
        let secretCalories = 100;
        let cheese = 0;
        let tomato = 0;
        let secretIngredient = 0;

        this.type = type;
        this.getCalories = () => _calories;
        this.setCalories = (caloriesValue) => _calories = caloriesValue;
        this.addCheese = () => {
            if (cheese < 1) {
                _calories += cheeseCalories;
                cheese++;
            } else {
                console.log('Sorry, you can add cheese only once.');
            }
        }
        this.addTomato = () => {
            if (tomato <= 1) {
                _calories += tomatoCalories;
                tomato++;
            } else {
                console.log('Sorry, you can add tomato only twice.');
            }
        }
        this.addSecretIngredient = () => {
            if (cheese !== 0 || tomato !== 0) {
                console.log('Sorry, you can add secret ingredient only once before ingredient');
            } else if (secretIngredient < 1) {
                _calories += secretCalories;
                secretIngredient++;
            } else {
                console.log('Sorry, you can add secret ingredient only once.');
            }
        }
        if (typeSecretIngredient) {
            this.addSecretIngredient();
        }

    }
}

const myHamburger = new Hamburger('classic', 600, true);
// console.log(myHamburger.getCalories());
// myHamburger.setCalories(700);
// console.log(myHamburger.getCalories());
// myHamburger.addCheese();
// console.log(myHamburger.getCalories());
// myHamburger.addCheese();
// myHamburger.addTomato();
// console.log(myHamburger.getCalories());
// myHamburger.addTomato();
// console.log(myHamburger.getCalories());
// myHamburger.addTomato();
myHamburger.addSecretIngredient();
// console.log(myHamburger.getCalories());