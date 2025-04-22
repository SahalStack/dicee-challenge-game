var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var leftDice = document.querySelector(".img1");
var rightDice = document.querySelector(".img2");

if (randomNumber1 == 1) {
  leftDice.setAttribute("src", "images/dice1.png");
} else if (randomNumber1 == 2) {
  leftDice.setAttribute("src", "images/dice2.png");
} else if (randomNumber1 == 3) {
  leftDice.setAttribute("src", "images/dice3.png");
} else if (randomNumber1 == 4) {
  leftDice.setAttribute("src", "images/dice4.png");
} else if (randomNumber1 == 5) {
  leftDice.setAttribute("src", "images/dice5.png");
} else if (randomNumber1 == 6) {
  leftDice.setAttribute("src", "images/dice6.png");
}

if (randomNumber2 == 1) {
  rightDice.setAttribute("src", "images/dice1.png");
} else if (randomNumber2 == 2) {
  rightDice.setAttribute("src", "images/dice2.png");
} else if (randomNumber2 == 3) {
  rightDice.setAttribute("src", "images/dice3.png");
} else if (randomNumber2 == 4) {
  rightDice.setAttribute("src", "images/dice4.png");
} else if (randomNumber2 == 5) {
  rightDice.setAttribute("src", "images/dice5.png");
} else if (randomNumber2 == 6) {
  rightDice.setAttribute("src", "images/dice6.png");
}

if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "🚩player 1 Won!";
} else if (randomNumber1 < randomNumber2) {
  document.querySelector("h1").innerHTML = "Player 2 Won!🚩";
} else {
  document.querySelector("h1").innerHTML = "Draw!";
}
