var tdOne = document.querySelector("#one");
var tdTwo = document.querySelector("#two");
var tdThree = document.querySelector("#three");
var tdFour = document.querySelector("#four");
var tdFive = document.querySelector("#five");
var tdSix = document.querySelector("#six");
var tdSeven = document.querySelector("#seven");
var tdEight = document.querySelector("#eight");
var tdNine = document.querySelector("#nine");

var restart = document.querySelector("#b");
var squares = document.querySelectorAll("td");

function clearBoard() {
  document.getElementById("won").textContent = "";
  for (var i = 0; i < squares.length; i++) {
    squares[i].textContent = "";
  }
}

restart.addEventListener("click", clearBoard);

function game() {
  if (this.textContent === "") {
    this.textContent = "X";
  } else if (this.textContent === "X") {
    this.textContent = "O";
  } else {
    this.textContent = "";
  }
}

for (var i = 0; i < squares.length; i++) {
  squares[i].addEventListener("click", game);
}

function gameLogic() {
  if (
    (tdOne.textContent === "X" &&
      tdTwo.textContent === "X" &&
      tdThree.textContent === "X") ||
    (tdOne.textContent === "X" &&
      tdFour.textContent === "X" &&
      tdSeven.textContent === "X") ||
    (tdOne.textContent === "X" &&
      tdFive.textContent === "X" &&
      tdNine.textContent === "X") ||
    (tdFour.textContent === "X" &&
      tdFive.textContent === "X" &&
      tdSix.textContent === "X") ||
    (tdSeven.textContent === "X" &&
      tdEight.textContent === "X" &&
      tdNine.textContent === "X") ||
    (tdTwo.textContent === "X" &&
      tdFive.textContent === "X" &&
      tdEight.textContent === "X") ||
    (tdThree.textContent === "X" &&
      tdSix.textContent === "X" &&
      tdNine.textContent === "X") ||
    (tdThree.textContent === "X" &&
      tdFive.textContent === "X" &&
      tdSeven.textContent === "X")
  ) {
    document.getElementById("won").textContent = "Congratulation! 'X' won";
  } else if (
    (tdOne.textContent === "O" &&
      tdTwo.textContent === "O" &&
      tdThree.textContent === "O") ||
    (tdOne.textContent === "O" &&
      tdFour.textContent === "O" &&
      tdSeven.textContent === "O") ||
    (tdOne.textContent === "O" &&
      tdFive.textContent === "O" &&
      tdNine.textContent === "O") ||
    (tdFour.textContent === "O" &&
      tdFive.textContent === "O" &&
      tdSix.textContent === "O") ||
    (tdSeven.textContent === "O" &&
      tdEight.textContent === "O" &&
      tdNine.textContent === "O") ||
    (tdTwo.textContent === "O" &&
      tdFive.textContent === "O" &&
      tdEight.textContent === "O") ||
    (tdThree.textContent === "O" &&
      tdSix.textContent === "O" &&
      tdNine.textContent === "O") ||
    (tdThree.textContent === "O" &&
      tdFive.textContent === "O" &&
      tdSeven.textContent === "O")
  ) {
    document.getElementById("won").textContent = "Congratulation! 'O' won";
  } else {
    document.getElementById("won").textContent = "";
  }
  // else if (
  //   (tdOne.textContent === "X" || "O") &&
  //   (tdTwo.textContent === "X" || "O") &&
  //   (tdThree.textContent === "X" || "O") &&
  //   (tdFour.textContent === "X" || "O") &&
  //   (tdFive.textContent === "X" || "O") &&
  //   (tdSix.textContent === "X" || "O") &&
  //   (tdSeven.textContent === "X" || "O") &&
  //   (tdEight.textContent === "X" || "O") &&
  //   (tdNine.textContent === "X" || "O")
  // ) {
  //   document.getElementById("won").textContent = "Game Over!!!";
  // }
}

for (var i = 0; i < squares.length; i++) {
  squares[i].addEventListener("click", gameLogic);
}

// function rightClick() {
//   alert("Working");
// }

// for (var i = 0; i < squares.length; i++) {
//   window.oncontextmenu = function() {
//     alert("Working");
//   };
// }
// document.addEventListener("contextmenu", event => event.preventDefault());
