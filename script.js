const hand = ['rock', 'paper', 'scissors']; 

let humanScore = 0;
let computerScore = 0;
let rounds = 0;

function playAgain(){
rounds=0;
humanScore=0;
computerScore=0;
document.getElementById("result").textContent="";
document.getElementById("score").textContent="";
document.getElementById("finalresult").textContent="";
}
function getComputerChoice() {
  const i = Math.floor(Math.random() * hand.length);
  return hand[i];
}

function playRound(humanChoice) {
if (rounds>=3){
endGame();
return;
}
  const computerChoice = getComputerChoice();
  let message = "";

  if (humanChoice === computerChoice) {
    message = `It's a tie! You both chose ${humanChoice}.`;
  } 
  else if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "scissors" && computerChoice === "paper")
  ) {
    humanScore++;
    message = `You win! ${humanChoice} beats ${computerChoice}.`;
  } 
  else {
    computerScore++;
    message = `You lose! ${computerChoice} beats ${humanChoice}.`;
  }

  rounds++;

  document.getElementById("result").textContent = message;
  document.getElementById("score").textContent = `Score: You ${humanScore} - Computer ${computerScore}`;

  if (rounds === 3) {
    endGame();
  }
}

function endGame() {
  let finalMessage = "";
  if (humanScore > computerScore) {
    finalMessage = "🎉 You win the game!";
  } else if (computerScore > humanScore) {
    finalMessage = "😢 You lose the game!";
  } else {
    finalMessage = "🤝 It's a tie game!";
  }
  document.getElementById("finalresult").textContent = finalMessage;
	console.log("Wanna play again?");
	document.getElementById("playagain").style.display = "inline-block";;
}
