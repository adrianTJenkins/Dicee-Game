function roll() {
  return Math.floor(Math.random() * 6) + 1;
}

function diceImage(playerNumber, number) {
  document.querySelector(".img" + playerNumber).setAttribute("src", "images/dice" + number + ".png");
}

function winner(num1, num2) {
  if (num1 > num2) {
    document.querySelector("h1").textContent = "🚩 Player 1 Wins!"
  }
  else if (num1 < num2) {
    document.querySelector("h1").textContent = "Player 2 Wins! 🚩"
  }
  else {
    document.querySelector("h1").textContent = "Draw!"
  }
}

var randomNumber1 = roll();
var randomNumber2 = roll();

diceImage(1, randomNumber1);
diceImage(2, randomNumber2);

winner(randomNumber1, randomNumber2);
