let startGameBtn = document.getElementsByClassName('start-game')[0];
let resetGameBtn = document.getElementsByClassName('reset-game')[0];
let gameElements = document.getElementsByClassName('game-elements')[0];
let battleInfo = document.getElementsByClassName('battle-info')[0];
let drawBlock = document.getElementsByClassName('draw')[0];
let battleMoves = document.getElementsByClassName('battle-moves')[0];
let resultGame = document.getElementsByClassName('result')[0];

let round = 0, wins = 0, losts = 0;
let rock = 0, scissors = 1, paper = 2;

startGameBtn.addEventListener('click', () => {
  gameElements.classList.toggle('hide');
});

gameElements.addEventListener('click', (e) => {
	if (round < 3) {
		let userMove = e.target.dataset.id;
		let randomNum = Math.floor(Math.random() * 3);
	
		startGame(userMove, randomNum);
	}
});

resetGameBtn.addEventListener('click', () => {
	resetGameBtn.classList.add('hide');
	round = 0, wins = 0, losts = 0;
	battleMoves.innerHTML = '';
	resultGame.innerHTML = '';
});