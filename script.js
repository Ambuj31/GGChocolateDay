let taps = 0;
const maxTaps = 5;

const chocolate = document.getElementById("chocolate");
const girl = document.getElementById("girl-container");
const finalScreen = document.getElementById("finalScreen");

/* One-thumb tap anywhere */
document.body.addEventListener("click", () => {
  if (taps < maxTaps) {
    moveChocolate();
    moveGirl();
    taps++;
  } else {
    catchChocolate();
  }
});

function moveChocolate() {
  const x = Math.random() * 70 + 10;
  const y = Math.random() * 40 + 10;
  chocolate.style.left = x + "%";
  chocolate.style.top = y + "%";
}

function moveGirl() {
  girl.style.left = chocolate.style.left;
}

function catchChocolate() {
  chocolate.style.display = "none";
  finalScreen.classList.add("show");
  finalScreen.style.opacity = "1";
  startChocolateRain();
}

function startChocolateRain() {
  for (let i = 0; i < 30; i++) {
    const drop = document.createElement("div");
    drop.classList.add("choco");
    drop.textContent = "🍫";
    drop.style.left = Math.random() * 100 + "vw";
    drop.style.animationDuration = 2 + Math.random() * 2 + "s";
    document.body.appendChild(drop);
  }
}
