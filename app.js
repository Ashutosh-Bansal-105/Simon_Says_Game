let gameSeq = [];
let userSeq = [];

let started = false;
let level = 0;

let h4 = document.querySelector("h4");
let btns = ["red", "green", "yellow", "blue"];
let body = document.querySelector("body");

document.addEventListener("keypress", function () {
  if (started == false) {
    console.log("Game Started");
    started = true;

    levelUp();
  }
});

function levelUp() {
  userSeq = [];
  level++;
  h4.innerText = `Level ${level}`;

  let randIdx = Math.floor(Math.random() * 3);
  let randColor = btns[randIdx];
  let randbtn = document.querySelector(`.${randColor}`);

  gameSeq.push(randColor);

  // console.log(randIdx);
  // console.log(randColor);
  // console.log(randbtn);
  // console.log(gameSeq);

  btnFlash(randbtn);
}

function btnFlash(btn) {
  btn.classList.add("flash");
  setTimeout(function () {
    btn.classList.remove("flash");
  }, 500);
}

function userFlash(btn) {
  btn.classList.add("userFlash");
  setTimeout(function () {
    btn.classList.remove("userFlash");
  }, 250);
}

function btnPress() {
  let btn = this;
  let userColor = btn.getAttribute("id");

  userSeq.push(userColor);

  checkAns(userSeq.length - 1);
  userFlash(btn);
}

function checkAns(idx) {
  if (userSeq[idx] == gameSeq[idx]) {
    if (userSeq.length == gameSeq.length) {
      setTimeout(levelUp, 1000);
    }
  } else {
    h4.innerHTML = `<h4>GAME OVER! Your score is <b>${level}<b>. <br> Press any key to start the game <h4>`;
    reset();
    bodyColor(body);
  }
}

let allBtn = document.querySelectorAll(".btn");
for (btn of allBtn) {
  btn.addEventListener("click", btnPress);
}

function reset() {
  started = false;
  level = 0;
  gameSeq = [];
  userSeq = [];
}

function bodyColor(body) {
  body.classList.add("bgColor");
  setTimeout(function () {
    body.classList.remove("bgColor");
  }, 500);
}
