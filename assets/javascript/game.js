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

// Making the computer guess a letter
var computerGuess = alphabet[Math.floor(Math.random() * alphabet.length)];

// Starting the wins/losses tally
var wins = 0;
var losses = 0;

// Record the users keypress and log it
document.onkeyup = function(event) {
	var keyPress = String.fromCharCode(event.keyCode).toLowerCase();
}