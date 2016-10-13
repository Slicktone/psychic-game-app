// Guess what letter computer is thinking of

// Set up number of wins

// Set up number of losses

// How many guesses are left, decreasing with each letter pushed.

// Display current guesses so far (log the current keys pressed and print them)

// When the player wins, increase wins counter and restart how many guesses are left

// When the player loses, increase lose counter and restart

// All Restarts should be done without refreshing the screen.

var alphabet = ["a", "b","c", "d", "e","f","g","h","i","j",
"k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

// Guesses so far
var currentGuess = [];

// Guesses Left
var countDown = 9;

// Starting the wins/losses tally
var wins = 0;
var losses = 0;

function resetCounter() {
	currentGuess = [];
	countDown = 9;
}

// Making the computer guess a letter
var computerChoice = alphabet[Math.floor(Math.random() * alphabet.length)];
	console.log("computerGuess:", computerChoice);

	document.onkeyup = function(event) {
		var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
		currentGuess.push(userGuess);
		document.getElementById("winCounter").innerHTML = wins;
		document.getElementById("loseCounter").innerHTML = losses;
		document.getElementById("countDown").innerHTML = countDown;
		document.getElementById("currentGuess").innerHTML = currentGuess;
		console.log("userGuess:", userGuess);
		
		if(userGuess === computerChoice) {
			wins++;
			
		}
// If user guesses incorrectly
		else if(userGuess !== computerChoice) {
			countDown--;
		}

		// When the user runs out of guesses
			if(countDown === 0) {
			losses++;
			resetCounter();
			}	
		}



	// var content = document.createElement("div");
	// content.innerHTML = "Yo";
	// userGuess.appendChild(content);
	// content.innerHTML = "<h3>Wins: " +  wins  + "</h3>";

 

        


//If user loses statement after 9 tries
// for(var i = 0; i < 9; i--) {
// 		document.write(countDown);
// 	}

//maybe try this for the guesses left
// for(var i = 1; i < 26; i++) {
// 	userGuess.push(currentGuess);
// }