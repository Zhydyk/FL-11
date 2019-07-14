// Your code goes here
let randomMaxNumber = 8;
let exampleNumber = 0;
let totalPrice = 0;
let divider = 2;
let repeat = true;
// let winPrice = 100;
let attempt = 4;
let priceIncreace = 2;
let possiblePrice = 100;

if(confirm('Do you want to play a game?')){
    while(repeat){ 
        for (let i = 3; i > 0; i--, possiblePrice = Math.floor(possiblePrice / divider)) {
            let n = Math.floor(Math.random() * randomMaxNumber);
            console.log(n);
            const userWin = +prompt(`Enter random number in range [0; ${randomMaxNumber}]
                    \nAttempts left: ${i}
                    \nTotal prize: ${totalPrice}$
                    \nPossible prize on current attempt: ${possiblePrice}$ `, exampleNumber);
            
            if (userWin === null) {
                
                console.log(userWin);
                break;
            }
            // if (userWin === n) {
            //     totalPrice += possiblePrice;
            //     let repeat = confirm(`Congratulation you win ${possiblePrice}$! Do you want to continue?`);

            // // start next level of game

            //     if (repeat === true) {
            //         possiblePrice *= priceIncreace;
            //         randomMaxNumber += attempt;
            //     } else if (repeat === false) {
            //         break;
            //     }
            // }   
        }
        alert(`Thank you for a game. Your prize is:  ${totalPrice}$`);
        repeat = confirm('Do you want to play again?');
    }
}else{
    alert('You did not become a millionaire, but can.');
}