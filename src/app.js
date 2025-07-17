import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function () {
  //write your code here
  const values = ['A', '2', '3', '4', '5', '6', '7', '8', '9', 'J', 'Q', 'K'];
  const symbols = ["♦", "♥", "♠", "♣"];
  //const colorHints = ["danger", "black"];

  const randomValues = values[Math.floor(Math.random() * values.length)];
  const randomSymbols = symbols[Math.floor(Math.random() * symbols.length)];
  const randomColor = randomSymbols[Math.floor(Math.random() * colorHints.length)];



  const otherCard = () => {

  }

  document.getElementById("palo-superior").innerHTML = randomSymbols
  document.getElementById("valor-carta").innerHTML = randomValues
  document.getElementById("palo-inferior").innerHTML = randomSymbols



};

