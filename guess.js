
/* This program challenges the user to guess a randomly generated number
 * within a range chosen by the user. Basic user input is validated to 
 * ensure numbers are entered and there are no guessing range violations
 * (such as choosing a number outside the high or low boundary of the range). 
 */
var intMax, intMin, intRandom, intGuess, intCount, intTotalGuesses = 0, isPlaying = true, guesses = [];

/* the following section prompts the user to enter the low number of their guessing range
 * and then validates that the user entered an actual number and make sure that the
 * number is at least 0.
*/

while (isPlaying) {
    intMin = parseInt(prompt("Choose the lowest number (but not lower than zero) in your guessing range: "));
    while (isNaN(intMin) || intMin < 0) {
        intMin = parseInt(prompt("I'm sorry but your lowest number choice is invalid. Please choose another number."));
    }

    intMax = parseInt(prompt("Choose the highest number (at least 2 more than the minimum) in your guessing range: "));
    while (isNaN(intMax) || (intMax <= intMin + 1)) {
        intMax = parseInt(prompt("I'm sorry but your highest number choice is invalid. Please choose another number."));
    }
/*The following line of code generates the random number to be used in the guessing game.
 The intGuess is replaced with a loop 
 */

    intRandom = parseInt(Math.floor(Math.random() * (intMax - intMin + 1)) + intMin);
    intCount = 0;
    guesses = [];

    while (intGuess !== intRandom) {
        intGuess = parseInt(prompt("Enter your guess number: "));
        
        if (guesses.includes(intGuess)) {
            alert("You have already guessed that number!");
            continue;
        }
        
        if (isNaN(intGuess) || intGuess < intMin || intGuess > intMax) {
            alert("I'm sorry but your guess number choice is invalid. Please choose another number.");
            continue;
        }

        intCount++;
        guesses.push(intGuess);
        intTotalGuesses++;

        if (intGuess < intRandom) {
            alert("Your choice of " + intGuess + " is too low!");
        } else if (intGuess > intRandom) {
            alert("Your choice of " + intGuess + " is too high!");
        }
    }

    alert("Congratulations!!! You guessed the correct number (" + intRandom + ")\n" +
          " and it only took you " + intCount + " attempts!");
          
          //The following is for extra credit;//

    var playAgain = prompt("Do you want to play again? (y/n)").toLowerCase();
    while (playAgain !== "y" && playAgain !== "n") {
        playAgain = prompt("I'm sorry, please enter y or n.").toLowerCase();
    }

    if (playAgain === "n") {
        isPlaying = false;
    }
}

alert("Thanks for playing! Total number of guesses: " + intTotalGuesses);
