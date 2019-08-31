require('./game');
require ('../scss/message.scss');
let rootNode = document.getElementById('root');
let startGame = document.getElementsByClassName('btn-play')[0];
let divWithBtn = document.createElement('div');
let rockBtn = document.createElement('button');
let paperBtn = document.createElement('button');
let scissBtn = document.createElement('button');

startGame.addEventListener('click', () =>  {
    

    rockBtn.class = 'btn-rock';
    rockBtn.innerHTML = 'Rock';
    paperBtn.class = 'btn-paper';
    paperBtn.innerHTML = 'Paper'
    scissBtn.class = 'btn-sciss';
    scissBtn.innerHTML = 'Sciss';

    divWithBtn.appendChild(rockBtn);
    divWithBtn.appendChild(paperBtn);
    divWithBtn.appendChild(scissBtn);
    
    rootNode.appendChild(divWithBtn);


})
