function startGame(firstPlayer, secondPlayer) {
	winners(firstPlayer, secondPlayer);
}

function winners(firstPlayer, secondPlayer) {

	let move = document.createElement('p');
	battleMoves.appendChild(move);
	round++;

	if (firstPlayer != secondPlayer) {	
		if (firstPlayer == rock && secondPlayer == scissors) {
			wins++;
			move.innerHTML = `Round ${round},  Rock vs. Scissors, You’ve WON!`;
		} else if (firstPlayer == rock && secondPlayer == paper) {
			losts++;
			move.innerHTML = `Round ${round},  Rock vs. Paper, You’ve LOST!`;
		}
	
		if (firstPlayer == scissors && secondPlayer == paper) {
			wins++;
			move.innerHTML = `Round ${round},  Scissors vs. Paper, You’ve WON!`;
		} else if (firstPlayer == scissors && secondPlayer == rock) {
			losts++;
			move.innerHTML = `Round ${round},  Scissors vs. Rock, You’ve LOST!`;
		}
	
		if (firstPlayer == paper && secondPlayer == rock) {
			wins++;
			move.innerHTML = `Round ${round},  Paper vs. Rock, You’ve WON!`;
		} else if (firstPlayer == paper && secondPlayer == scissors) {
			losts++;
			move.innerHTML = `Round ${round},  Paper vs. Scissors, You’ve LOST!`;
		}
	} else {
		move.innerHTML = `Round ${round},  DROW!`;
	}
	if (round === 3) {
		resetGameBtn.classList.remove('hide');
		if (wins === losts) {
			resultGame.innerHTML = "Game is finished. DROW!";
		}
		wins > losts ? resultGame.innerHTML = `Game is finished. You've WON!` : resultGame.innerHTML = `Game is finished. You've LOST!`;
	}
}