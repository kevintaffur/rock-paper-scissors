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

function playRound(human, computerChoice) {
  let humanChoice = human.toLowerCase();

  if (humanChoice === "rock" && computerChoice === "scissors") {
    humanScore++;
    return "You win! Rock beats Scissors";
  } else if (humanChoice === "rock" && computerChoice === "paper") {
    computerScore++;
    return "You lose! Paper beats Rock";
  } else if (humanChoice === "rock" && computerChoice === "rock") {
    return "Draw! Play again";
  } else if (humanChoice === "paper" && computerChoice === "rock") {
    humanScore++;
    return "You win! Paper beats Rock";
  } else if (humanChoice === "paper" && computerChoice === "scissors") {
    computerScore++;
    return "You lose! Scissors beats Paper";
  } else if (humanChoice === "paper" && computerChoice === "paper") {
    return "Draw! Play again";
  } else if (humanChoice === "scissors" && computerChoice === "rock") {
    computerScore++;
    return "You lose! Rock beats Scissors";
  } else if (humanChoice === "scissors" && computerChoice === "paper") {
    humanScore++;
    return "You win! Scissors beats Paper";
  } else if (humanChoice === "scissors" && computerChoice === "scissors") {
    return "Draw! Play again";
  } else {
    return "Play again";
  }
}

function updateScore() {
  const score = document.querySelector(".score");
  score.textContent = `Human: ${humanScore}   |   Computer: ${computerScore}`;
}

function setMessage(message) {
  const divForMessages = document.createElement("div");
  const buttons = document.querySelector("#button-container");
  const body = document.querySelector("body");
  const currentMessage = document.querySelector(".messages");

  divForMessages.classList.add("messages");
  divForMessages.setAttribute("style", "text-align: center; font-size: 20px; padding-bottom: 30px; height: 30px;");
  divForMessages.textContent = message;
  
  body.removeChild(currentMessage);
  body.insertBefore(divForMessages, buttons);
}

function checkForWinner() {
  if (humanScore === 5) {
    setMessage("Human won!");
    humanScore = 0;
    computerScore = 0;
    updateScore();
  } else if (computerScore === 5) {
    setMessage("Computer won!");
    humanScore = 0;
    computerScore = 0;
    updateScore();
  }
}

function playGame(event) {
  const message = playRound(event.target.id, getComputerChoice());
  setMessage(message);
  updateScore();
  checkForWinner();
}

const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");

rock.addEventListener("click", (e) => {
  playGame(e);
});

paper.addEventListener("click", (e) => {
  playGame(e);
});

scissors.addEventListener("click", (e) => {
  playGame(e);
});
