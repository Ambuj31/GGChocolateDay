const playArea = document.getElementById("playArea");
const chocolate = document.getElementById("chocolate");
const girl = document.getElementById("girl");
const message = document.getElementById("message");
const finalScene = document.getElementById("final-scene");

let taps = 0;
const maxTaps = 6;

// Single tap anywhere (mobile-friendly)
playArea.addEventListener("click", () => {
  if (taps >= maxTaps) return;

  taps++;

  const x = Math.random() * 80;
  const y = Math.random() * 45;

  chocolate.style.left = `${x}%`;
  chocolate.style.top = `${y}%`;
  girl.style.left = `${x}%`;

  if (taps === maxTaps) {
    message.textContent = "She finally caught it 🍫❤️";
    document.querySelector(".name-bubble").style.display = "none";

    chocolateRain();

    setTimeout(() => {
      finalScene.style.opacity = 1;
    }, 1200);
  }
});

function chocolateRain() {
  for (let i = 0; i < 30; i++) {
    const drop = document.createElement("div");
    drop.className = "choco-rain";
    drop.textContent = "🍫";
    drop.style.left = Math.random() * 100 + "vw";
    drop.style.animationDelay = Math.random() * 1 + "s";
    document.body.appendChild(drop);

    setTimeout(() => drop.remove(), 3000);
  }
}
