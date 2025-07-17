import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function () {
  //write your code here
  const values = ['A', '2', '3', '4', '5', '6', '7', '8', '9', 'J', 'Q', 'K'];
  const symbols = ["♦", "♥", "♠", "♣"];

  const randomCard = () => {

    const randomValues = values[Math.floor(Math.random() * values.length)];
    const randomSymbols = symbols[Math.floor(Math.random() * symbols.length)];

    document.getElementById("palo-superior").innerHTML = randomSymbols
    document.getElementById("valor-carta").innerHTML = randomValues
    document.getElementById("palo-inferior").innerHTML = randomSymbols

    if (randomSymbols === "♦" || randomSymbols === "♥") {
      document.getElementById("palo-superior").style.color = "red";
      document.getElementById("palo-inferior").style.color = "red";
    }
    else {
      document.getElementById("palo-superior").style.color = "black";
      document.getElementById("palo-inferior").style.color = "black";
    }

  }

  randomCard();

  document.getElementById("myButton").addEventListener("click", randomCard);

  const otherCard = () => {
    const myButton = document.getElementById("myButton");
    myButton.addEventListener("click", randomCard);

  };

  otherCard();

  setInterval(randomCard, 3000); // Cambia la carta cada 3 segundos

}



