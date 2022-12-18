const message = document.querySelector(".message");
const check = document.querySelector(".check");
const guessNumberTitle = document.querySelector(".header-title");
const number = document.querySelector(".number");
const labelScore = document.querySelector(".score");
const playAgain = document.querySelector(".header-btn");

const defaultHeader = "Guess My Number";
const defaultNumber = (document.querySelector(
  ".number"
).style.cssText = `width: 15rem; background-color: #eee;`);
const defaultMessage = function (selector, message) {
  document.querySelector(selector).textContent = message;
};
const secretNumber = Math.floor(Math.random() * 20) + 1;

let score = 20;
let highScore = 0;
labelScore.textContent = score;
const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};
check.addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  console.log(guess);
  if (!guess) {
    console.log("choose a number!");
  } else if (guess === secretNumber) {
    guessNumberTitle.textContent = "Correct Number!";
    number.style.width = "30rem";
    number.style.backgroundColor = "Green";
    number.textContent = secretNumber;

    displayMessage("Good job!");

    if (score > highScore) {
      highScore = score;
      document.querySelector(".highscore").textContent = highScore;
    }
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? "Too high!" : "Too low");
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      displayMessage("You lost the game");
      document.querySelector(".score").textContent = 0;
    }
  }
});
console.log(secretNumber);

playAgain.addEventListener("click", function () {
  score = 20;
  displayMessage("Start guessing");
  number.style = defaultNumber;
  number.textContent = "?";
  guessNumberTitle.textContent = defaultHeader;
});
