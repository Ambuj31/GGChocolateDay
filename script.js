const playArea = document.getElementById("playArea");
const chocolate = document.getElementById("chocolate");
const girl = document.getElementById("girl");
const message = document.getElementById("message");
const popup = document.getElementById("popup");

let taps = 0;
const maxTaps = 6;

// Single tap anywhere
playArea.addEventListener("click", () => {
  if (taps < maxTaps) {
    taps++;

    const x = Math.random() * 80;
    const y = Math.random() * 50;

    chocolate.style.left = `${x}%`;
    chocolate.style.top = `${y}%`;

    girl.style.left = `${x}%`;

    if (taps === maxTaps) {
  girl.classList.remove("running");
  document.querySelector(".name-bubble").style.display = "none";
  message.textContent = "She finally caught it 🍫❤️";
  chocolateRain();
  setTimeout(() => popup.style.display = "flex", 1500);
}

  }
});

function chocolateRain() {
  for (let i = 0; i < 30; i++) {
    const drop = document.createElement("div");
    drop.className = "choco";
    drop.textContent = "🍫";
    drop.style.left = Math.random() * 100 + "vw";
    document.body.appendChild(drop);
    setTimeout(() => drop.remove(), 3000);
  }
}

function closePopup() {
  popup.style.display = "none";
}
