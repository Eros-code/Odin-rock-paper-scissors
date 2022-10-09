function getComputerChoice() {
  let x = Math.floor(Math.random() * 3);

  let choiceArr = ["Rock", "Paper", "Scissors"];

  return choiceArr[x];
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    console.log("It's a draw!\n");
  } else if (
    (playerSelection === "Rock" && computerSelection === "Paper") ||
    (playerSelection === "Scissors" && computerSelection === "Rock") ||
    (playerSelection === "Paper" && computerSelection === "Scissors")
  ) {
    console.log(
      `\nYou lose this round! ${computerSelection} beats ${playerSelection}\n`
    );
    return false;
  } else {
    console.log(
      `\nYou win this round! ${playerSelection} beats ${computerSelection}\n`
    );
    return true;
  }
}

function game() {
  let playerScore = 0;
  let computerScore = 0;

  while (playerScore < 5 && computerScore < 5) {
    const computerSelection = getComputerChoice();
    let playerSelection = prompt("Enter Rock, Paper or Scissors!");

    playerSelection =
      playerSelection[0].toUpperCase() + playerSelection.toLowerCase().slice(1);

    let newRound = playRound(playerSelection, computerSelection);

    if (newRound === true) {
      playerScore += 1;
    } else if (newRound === false) {
      computerScore += 1;
    }

    console.log(
      `You currently have a score of ${playerScore} and the computer has a score of ${computerScore}`
    );
  }

  if (playerScore === 5) {
    console.log("\nCongratulations you have won the game!");
  } else if (computerScore === 5) {
    console.log("\nYou lose! the computer has won the game!");
  }

  return null;
}

game();

//console.log(computerSelection);
