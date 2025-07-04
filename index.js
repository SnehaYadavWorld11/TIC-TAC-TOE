const maindiv = document.querySelector(".maindiv");
const boxes = document.querySelectorAll(".box");
const heading = document.getElementById("heading");
const restartbtn = document.getElementById("restartbtn");

let currentplayermove = "X";

let winnigCondition = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];
let count;
function listener(e) {
  if (e.target.className !== "maindiv") {
    if (e.target.innerText === "") {
      e.target.innerText = currentplayermove;
      count++;
      winner();
      currentplayermove = currentplayermove == "X" ? "O" : "X";
    }
    if (count === 9) {
      heading.innerText = "Match Draw";
    }
  }
}
maindiv.addEventListener("click", listener);

function winner() {
  winnigCondition.forEach((item) => {
    let index0 = item[0];
    let index1 = item[1];
    let index2 = item[2];
    let val0 = boxes[index0].innerText;
    let val1 = boxes[index1].innerText;
    let val2 = boxes[index2].innerText;
    if (val0 != "" && val2 != "" && val2 != "") {
      if (val0 === val1 && val1 === val2) {
        boxes[index0].classList.add("winnerclass");
        boxes[index1].classList.add("winnerclass");
        boxes[index2].classList.add("winnerclass");
        count = 0;
        heading.innerText = `Winner is ${val0}`;
        maindiv.removeEventListener("click", listener);
      }
    }
  });
}

restartbtn.addEventListener("click", () => {
  currentplayermove = "X";
  heading.innerText = "Tic Tac Toe";
  boxes.forEach((item) => {
    item.classList.remove("winnerclass");
    item.innerText = "";
  });
  maindiv.addEventListener("click", listener);
});
