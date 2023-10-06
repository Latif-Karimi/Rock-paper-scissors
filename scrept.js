const score = JSON.parse(localStorage.getItem("score")) || {
  Wins: 0,
  Losses: 0,
  Ties: 0,
};

scoreElement();

function playGame(playerMove) {
  const computerMove = pickComputerMove();

  let result = "";
  let resultClass = "";

  if (playerMove === "scissors") {
    if (computerMove === "rock") {
      result = "You Lose";
      resultClass = "lose";
    } else if (computerMove === "paper") {
      result = "You Win";
      resultClass = "win";
    } else if (computerMove === "scissors") {
      result = "Tie";
      resultClass = "tie";
    }
  } else if (playerMove === "paper") {
    if (computerMove === "rock") {
      result = "You Win";
      resultClass = "win";
    } else if (computerMove === "paper") {
      result = "Tie";
      resultClass = "tie";
    } else if (computerMove === "scissors") {
      result = "You Lose";
      resultClass = "lose";
    }
  } else if (playerMove === "rock") {
    if (computerMove === "rock") {
      result = "Tie";
      resultClass = "tie";
    } else if (computerMove === "paper") {
      result = "You Lose";
      resultClass = "lose";
    } else if (computerMove === "scissors") {
      result = "You Win";
      resultClass = "win";
    }
  }

  if (result === "You Win") {
    score.Wins += 1;
  } else if (result === "You Lose") {
    score.Losses += 1;
  } else if (result === "Tie") {
    score.Ties += 1;
  }

  localStorage.setItem("score", JSON.stringify(score));

  scoreElement();

  document.querySelector(".js-result").innerHTML = `
  <span class="${resultClass}">${result}</span>`;
  document.querySelector(
    ".js-move"
  ).innerHTML = `You 
  <img src="image/${playerMove}-emoji.png" alt="" class="move-icon" /> 

  <img src="image/${computerMove}-emoji.png" alt="" class="move-icon" />
  Computer`;
}

function scoreElement() {
  document.querySelector(".js-score").innerHTML = `
   <span class="wins"> Wins: ${score.Wins}</span><br> 
    <span class="losses"> Losses:   ${score.Losses}</span><br> 
   <span class="ties"> Ties: ${score.Ties}</span> `;
}

function pickComputerMove() {
  const randomNumber = Math.random();
  let computerMove = "";
  if (randomNumber >= 0 && randomNumber < 1 / 2) {
    computerMove = "rock";
  } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
    computerMove = "paper";
  } else if (randomNumber >= 1 / 3 && randomNumber < 1) {
    computerMove = "scissors";
  }
  return computerMove;
}