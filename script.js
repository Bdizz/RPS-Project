// Define the game rules using an object where each option is associated with its defeating option
const gameRules = {
  Rock: "Scissors",
  Paper: "Rock",
  Scissors: "Paper",
};

// Function to generate a random computer selection using the game rules
const computer = () => {
  let options = Object.keys(gameRules);
  let randomIndex = Math.floor(Math.random() * options.length);
  return options[randomIndex];
};

// Function to determine the result of a round based on player and computer selections
const round = (playerSelection, computerSelection) => {
  if (playerSelection === computerSelection) {
    return "It's a Tie!";
  } else if (gameRules[playerSelection] === computerSelection) {
    return `You Win! ${playerSelection} beats ${computerSelection}`;
  } else {
    return `You lose! ${computerSelection} beats ${playerSelection}`;
  }
};

// Function to prompt the player for their selection, validate it, and return the choice
const getPlayerSelection = () => {
  let validOptions = Object.keys(gameRules);
  let userChoice = prompt(
    `Type either ${validOptions.join(", ")} in order to start the game.`
  );
  while (!validOptions.includes(userChoice)) {
    userChoice = prompt(
      `Invalid input. Type either ${validOptions.join(", ")} to start the game.`
    );
  }
  return userChoice;
};

// Function that manages the game logic, keeps track of points, and determines the winner
const gameLogic = () => {
  let playerPoints = 0;
  let computerPoints = 0;

  // Play rounds until either the player or the computer reaches 5 points
  while (playerPoints < 5 && computerPoints < 5) {
    let userChoice = getPlayerSelection();
    let result = round(userChoice, computer());

    console.log(result);
    if (result === "It's a Tie!") {
      console.log(`Score: ${playerPoints} - ${computerPoints}`);
    } else if (result.startsWith("You Win!")) {
      playerPoints += 1;
      console.log(`Score: ${playerPoints} - ${computerPoints}`);
    } else {
      computerPoints += 1;
      console.log(`Score: ${playerPoints} - ${computerPoints}`);
    }
  }

  // Determine the winner based on the points and display the result
  if (playerPoints === 5) {
    console.log("Game over, you Win!");
    return "Game over! You Win!";
  } else {
    console.log("Game over, you Lose!");
    return "Game over! You lose!";
  }
};

// Start the game by calling the gameLogic function
gameLogic();

