
/*  
*    Function that returns Rock, Paper, or Scissor randomly
*    This function is made by using Math.random()
*/ 

let computer = function() {
    
    // storing random number 1-3 in var num
    let num = Math.floor((Math.random() * 3) + 1);

    // based on number return string (either R, P, S)
    if (num == 1) {
        return "Rock";
    } else if (num == 2) {
        return "Paper";
    } else {
        return "Scissors";
    }
  
}

/*
    Function that will play a single round of Rock-Paper-Scissors
    The main logic will be based around if else statements.
    This function takes input from the player and computer.
*/
let round = function(playerSelection, computerSelection) {

    // main logic that checks to see which which player wins, using else if statements. 

    if (playerSelection == computerSelection) {
        return "It's a Tie!";

    } else if (playerSelection == "Rock" && computerSelection == "Scissors") {
        return `You Win! ${playerSelection} beats ${computerSelection}`;

    } else if (playerSelection == "Paper" && computerSelection == "Rock") {
        return `You Win! ${playerSelection} beats ${computerSelection}`;

    } else if (playerSelection == "Scissors" && computerSelection == "Paper") {
        return `You Win! ${playerSelection} beats ${computerSelection}`;

    } else {
        return `You lose ${computerSelection} beats ${playerSelection}`;
    }

    
}






//console.log(computer());