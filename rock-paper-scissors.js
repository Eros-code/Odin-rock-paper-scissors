function getComputerChoice() {
  let x = Math.floor(Math.random() * 3);

  let choiceArr = ["Rock", "Paper", "Scissors"];

  return choiceArr[x];
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    console.log("It's a draw!");
  } else if (
    (playerSelection === "Rock" && computerSelection === "Paper") ||
    (playerSelection === "Scissors" && computerSelection === "Rock") ||
    (playerSelection === "Paper" && computerSelection === "Scissors")
  ) {
    console.log(`You Lose! ${computerSelection} beats ${playerSelection}`);
  } else {
    console.log(`You Win! ${playerSelection} beats ${computerSelection}`);
  }
}

const computerSelection = getComputerChoice();
const playerSelection = prompt("Enter Rock, Paper or Scissors!");

playRound(playerSelection, computerSelection);

//console.log(computerSelection);
