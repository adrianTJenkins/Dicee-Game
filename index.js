function roll() {
  return Math.floor(Math.random() * 6) + 1;
}

function dice(imageClass, number) {
  switch(number) {
    case 1:
      document.querySelector(imageClass).setAttribute("src", "images/dice1.png");
      break;
    case 2:
      document.querySelector(imageClass).setAttribute("src", "images/dice2.png");
      break;
    case 3:
      document.querySelector(imageClass).setAttribute("src", "images/dice3.png");
      break;
    case 4:
      document.querySelector(imageClass).setAttribute("src", "images/dice4.png");
      break;
    case 5:
      document.querySelector(imageClass).setAttribute("src", "images/dice5.png");
      break;
    case 6:
      document.querySelector(imageClass).setAttribute("src", "images/dice6.png");
      break;
    default:
  }
}

function winner(num1, num2) {
  if (num1 > num2) {
    document.querySelector("h1").textContent = "Player 1 Wins!"
  }
  else if (num1 < num2) {
    document.querySelector("h1").textContent = "Player 2 Wins!"
  }
  else {
    document.querySelector("h1").textContent = "Draw!"
  }
}

var randomNumber1 = roll();
var randomNumber2 = roll();

dice(".img1", randomNumber1);
dice(".img2", randomNumber2);

winner(randomNumber1, randomNumber2);
