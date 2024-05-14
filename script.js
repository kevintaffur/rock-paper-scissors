let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
  let ran = Math.floor(Math.random() * 3);

  if (ran === 0) {
    return "rock";
  } else if (ran === 1) {
    return "paper";
  } else if (ran === 2) {
    return "scissors";
  }
}

function getHumanChoice() {
  let choice = prompt("rock, paper, or scissors");
  return choice;
}

function playRound(human, computerChoice) {
  let humanChoice = human.toLowerCase();

  if (humanChoice === "rock" && computerChoice === "scissors") {
    humanScore++;
    return "You win! Rock beats Scissors";
  } else if (humanChoice === "rock" && computerChoice === "paper") {
    computerChoice++;
    return "You lose! Paper beats Rock";
  } else if (humanChoice === "rock" && computerChoice === "rock") {
    return "Play again";
  } else if (humanChoice === "paper" && computerChoice === "rock") {
    humanScore++;
    return "You win! Paper beats Rock";
  } else if (humanChoice === "paper" && computerChoice === "scissors") {
    computerScore++;
    return "You lose! Scissors beats Paper";
  } else if (humanChoice === "paper" && computerChoice === "paper") {
    return "Play again";
  } else if (humanChoice === "scissors" && computerChoice === "rock") {
    computerScore++;
    return "You lose! Rock beats Scissors";
  } else if (humanChoice === "scissors" && computerChoice === "paper") {
    humanScore++;
    return "You win! Scissors beats Paper";
  } else if (humanChoice === "scissors" && computerChoice === "scissors") {
    return "Play again";
  } else {
    return "Play again";
  }
}

function playGame() {
  while (humanScore < 5 && computerScore < 5) {
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    console.log(playRound(humanSelection, computerSelection));
    console.log(humanScore, computerScore);
  }
}

playGame();
if (humanScore > computerScore) {
  console.log("Human won!");
} else if (computerScore > humanScore) {
  console.log("Computer won!");
}

