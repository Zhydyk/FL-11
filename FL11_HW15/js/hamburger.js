class Hamburger {
    constructor(type, calories, typeSecretIngredient) {
        let _calories = calories;
        let cheeseCalories = 120;
        let tomatoCalories = 20;
        let secretCalories = 100;
        let cheese = 0;
        let tomato = 0;
        let secretIngredient = 0;
        let biteValue = 0;

        this.type = type;

        this.getCalories = () => _calories;
        this.setCalories = (caloriesValue) => _calories = caloriesValue;
        if (typeSecretIngredient) {
            this.addSecretIngredient();
        }
        this.addCheese = () => {
            if (biteValue >= 1) {
                console.log('Sorry, you can not add cheese');
            } else if (cheese < 1) {
                _calories += cheeseCalories;
                cheese++;
            } else {
                console.log('Sorry, you can add cheese only once.');
            }
        }
        this.addTomato = () => {
            if (biteValue >= 1) {
                console.log('Sorry, you can not add tomato');
            } else if (tomato <= 1) {
                _calories += tomatoCalories;
                tomato++;
            } else {
                console.log('Sorry, you can add tomato only twice.');
            }
        }
        this.addSecretIngredient = () => {
            if (biteValue >= 1) {
                console.log('Sorry, you cannot add secret ingredient');
            } else if (cheese !== 0 || tomato !== 0) {
                console.log('Sorry, you can add secret ingredient only once before ingredient');
            } else if (secretIngredient < 1) {
                _calories += secretCalories;
                secretIngredient++;
            } else {
                console.log('Sorry, you can add secret ingredient only once.');
            }
        }

        this.bite = () => {
            biteValue += 1;
        }
        this.info = () => {
            let information = `${this.type.charAt(0).toUpperCase() + this.type.slice(1)} hamburger,`;
            if(typeSecretIngredient){
                information += ` with secret ingredient,`
            }
            if(cheese){
                information += ` with cheese,`;
            }
            if(tomato){
                information += ` with ${tomato} tomato,`
            }
            if(biteValue){
                information += ` is bit ${biteValue} times.`;
            }
            information += ` Total calories: ${_calories}.`;
            return information;
        }
    }
}

const myHamburger = new Hamburger('classic', 600);
// console.log(myHamburger.getCalories());
// myHamburger.setCalories(700);
// console.log(myHamburger.getCalories());
myHamburger.addSecretIngredient();
myHamburger.addCheese();
// console.log(myHamburger.getCalories());
// myHamburger.addCheese();
// myHamburger.addTomato();
// console.log(myHamburger.getCalories());
// myHamburger.addTomato();
// console.log(myHamburger.getCalories());
myHamburger.addTomato();
// myHamburger.addSecretIngredient();
// console.log(myHamburger.getCalories());

myHamburger.bite();
myHamburger.bite();
myHamburger.bite();
// myHamburger.addTomato();

// myHamburger.addCheese();
// console.log(myHamburger.getCalories());
console.log(myHamburger.info());