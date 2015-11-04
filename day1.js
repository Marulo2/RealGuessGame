// This is a simple guessing game!

function gameStart() {
	var number = 3;
	var guess = prompt("Guess a number between 1 and 10!")
		if (guess == number) {
			alert("You win!")
			alert("What do you win?")
			alert("Nothing!")
			gameEnd();
		}

	else {
		if (guess < number) {
			alert("You lose! Your guess is too low!")
			gameStart();
		}	
		if (guess > number) {
			alert("You lose! Your guess is too high!")
			gameStart();
		}
		if (guess > 10) {
			alert("What are you doing!!!")
			alert("That number is greater than 10!")
			gameStart();
		}
	}
}

function gameEnd() {
	alert("That's all folks!");
}
gameStart();