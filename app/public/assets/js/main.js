// Navbar active links
const allNavLinks = document.querySelectorAll(".navbar > div > a");

const removeDomainName = (url) => {
  return url.split("/").slice(-1)[0];
}

allNavLinks.forEach(link => {
  removeDomainName(link.href) === removeDomainName(window.location.href) ? link.classList.add('text-orange') : link.classList.remove('text-orange');
  removeDomainName(link.href) === "game" && removeDomainName(window.location.href) === "play" ? link.classList.add("text-orange") : null;
});


// Hover effect Play and Stop buttons
const allDices = document.querySelectorAll(".des > li");

const playButton = document.querySelector(".play-button");


if (playButton) {
  playButton.addEventListener("mouseenter", (e) => {
    allDices.forEach((dice) => dice.classList.add("shake-dices"));
  });

  playButton.addEventListener("mouseout", (e) => {
    allDices.forEach((dice) => dice.classList.remove("shake-dices"));
  });
}

// Show/Hide Game rules
const gameRules = document.querySelector(".game-rules");
const rulesBtn = document.querySelector(".rules-btn");

rulesBtn.style.display = "none";

if (gameRules && sessionStorage.getItem("rules") === null) {
  const hideRules = setInterval(() => {
    gameRules.style.display = "none";
    rulesBtn.style.display = "inline";
    sessionStorage.setItem("rules", "shown");
    clearInterval(hideRules);
  }, 8000);
} else if (gameRules && sessionStorage.getItem("rules")) {
  gameRules.style.display = "none";
  rulesBtn.style.display = "inline";
}

rulesBtn.addEventListener("click", (e) => {
  gameRules.style.display === "none" ? gameRules.style.display = "block" : gameRules.style.display = "none";
  rulesBtn.textContent === "Voir les règles" ? rulesBtn.textContent = "Fermer" : rulesBtn.textContent = "Voir les règles";
});

// Dices dots
const dicesNumbers = document.querySelectorAll(".dice-nb");

const dicesClasses = ["two-dots", "three-dots", "four-dots", "five-dots", "six-dots"];

if (dicesNumbers) {
  dicesNumbers.forEach((nb) => {
    switch (nb.textContent) {
      case "1":
        dicesClasses.forEach((c) => {
          if (nb.parentElement.classList.contains(c)) {
            nb.parentElement.classList.remove(c);
          }
        });
        nb.parentElement.classList.add("one-dot");
        break;
      case "2":
        dicesClasses.forEach((c) => {
          if (nb.parentElement.classList.contains(c)) {
            nb.parentElement.classList.remove(c);
          }
        });
        nb.parentElement.classList.add("two-dots");
        for (let i = 1; i < 2; i++) {
          let clone = nb.parentElement.lastElementChild.cloneNode();
          nb.parentElement.append(clone);
        }
        break;

      case "3":
        nb.parentElement.classList.add("three-dots");
        for (let i = 1; i < 3; i++) {
          let clone = nb.parentElement.lastElementChild.cloneNode();
          nb.parentElement.append(clone);
        }
        break;

      case "4":
        nb.parentElement.classList.add("four-dots");
        const fourColumnsArr = [document.createElement("div"), document.createElement("div")];
        fourColumnsArr.map((col) => {
          col.classList.add("column");
          for (let i = 1; i < 3; i++) {
            let clone = nb.parentElement.querySelector(".dot").cloneNode();
            col.append(clone);
          }
        });
        nb.parentElement.append(...fourColumnsArr);
        nb.parentElement.removeChild(nb.parentElement.querySelector(".dot"));
        break;

      case "5":
        nb.parentElement.classList.add("five-dots");
        const fiveColumnsArr = [
          document.createElement("div"),
          document.createElement("div"),
          document.createElement("div"),
        ];
        fiveColumnsArr.map((col, index) => {
          col.classList.add("column");
          if (index === 1) {
            let clone = nb.parentElement.querySelector(".dot").cloneNode();
            col.append(clone);
          } else {
            for (let i = 1; i < 3; i++) {
              let clone = nb.parentElement.querySelector(".dot").cloneNode();
              col.append(clone);
            }
          }
        });
        nb.parentElement.append(...fiveColumnsArr);
        nb.parentElement.removeChild(nb.parentElement.querySelector(".dot"));
        break;

      case "6":
        nb.parentElement.classList.add("six-dots");
        const sixColumnsArr = [
          document.createElement("div"),
          document.createElement("div"),
        ];
        sixColumnsArr.map((col) => {
          col.classList.add("column");
          for (let i = 1; i < 4; i++) {
            let clone = nb.parentElement.querySelector(".dot").cloneNode();
            col.append(clone);
          }
        });
        nb.parentElement.append(...sixColumnsArr);
        nb.parentElement.removeChild(nb.parentElement.querySelector(".dot"));
        break;

      default:
        break;
    }
  });
}
