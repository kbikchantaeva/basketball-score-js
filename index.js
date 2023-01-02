let scoreHomeEl = document.getElementById("score-home-el");
let countHome = 0;

let scoreGuestEl = document.getElementById("score-guest-el");
let countGuest = 0;

// let onePointHomeEl = document.getElementById("onep-home-el")
// let twoPointsHomeEl = document.getElementById("twop-home-el")
// let threePointsHomeEl = document.getElementById("threep-home-el")

// let onePointGuestEl = document.getElementById("onep-guest-el")
// let twoPointsGuestEl = document.getElementById("twop-guest-el")
// let threePointsGuestEl = document.getElementById("threep-guest-el")

// let newGameEl = document.getElementById("new-game-btn")

function onePointHome() {
  countHome += 1;
  scoreHomeEl.textContent = countHome;
}

function twoPointsHome() {
  countHome += 2;
  scoreHomeEl.textContent = countHome;
}

function threePointsHome() {
  countHome += 3;
  scoreHomeEl.textContent = countHome;
}

function onePointGuest() {
  countGuest += 1;
  scoreGuestEl.textContent = countGuest;
}

function twoPointsGuest() {
  countGuest += 2;
  scoreGuestEl.textContent = countGuest;
}

function threePointsGuest() {
  countGuest += 3;
  scoreGuestEl.textContent = countGuest;
}

function newGame() {
  scoreHomeEl.textContent = 0;
  countHome = 0;
  scoreGuestEl.textContent = 0;
  countGuest = 0;
}
