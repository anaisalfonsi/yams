const allDices = document.querySelectorAll(".des > li");

const playButton = document.querySelector(".play-button");

playButton.addEventListener('mouseenter', (e) => {
    allDices.forEach((dice) => dice.classList.add("shake-dices"));
});

playButton.addEventListener("mouseout", (e) => {
  allDices.forEach((dice) => dice.classList.remove("shake-dices"));
});
