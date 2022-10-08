function getComputerChoice() {
  let x = Math.floor(Math.random() * 3);

  let choiceArr = ["Rock", "Paper", "Scissors"];

  return choiceArr[x];
}

computer = getComputerChoice();

console.log(computer);
