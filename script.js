const chocolate = document.getElementById("chocolate");
const girlWrapper = document.getElementById("girlWrapper");
const area = document.getElementById("gameArea");
const finalScreen = document.getElementById("finalScreen");

let count = 0;
const max = 6;

chocolate.addEventListener("click", () => {
  if (count < max) {
    moveChocolate();
    moveGirl();
    count++;
  } else {
    finishGame();
  }
});

function moveChocolate() {
  const padding = 60;
  const x = Math.random() * (area.clientWidth - padding);
  const y = Math.random() * (area.clientHeight - padding);
  chocolate.style.left = x + "px";
  chocolate.style.top = y + "px";
}


function moveGirl() {
  girlWrapper.style.left = chocolate.style.left;
}

function finishGame() {
  chocolate.style.display = "none";
  chocolateRain();
  setTimeout(() => finalScreen.classList.add("show"), 500);
}

function chocolateRain() {
  let drops = 0;

  const interval = setInterval(() => {
    for (let i = 0; i < 3; i++) {
      const c = document.createElement("div");
      c.className = "choco";
      c.textContent = "🍫";
      c.style.left = Math.random() * 100 + "vw";
      c.style.fontSize = 18 + Math.random() * 14 + "px";
      document.body.appendChild(c);

      setTimeout(() => c.remove(), 3000);
    }

    drops++;
    if (drops > 10) clearInterval(interval); // ⏱️ duration control
  }, 150);
}


/* 👉 Tap final screen to show signature */
finalScreen.addEventListener("click", () => {
  finalScreen.remove();
  showSignature();
});

function showSignature() {
  const card = document.createElement("div");
  card.className = "signature-card";

  card.innerHTML = `
    <h2>— Ambuj 🤍</h2>
    <p>Happy Chocolate Day, Gauri 🍫</p>
    <a href="https://wa.me/9111113431?text=This%20is%20for%20you%20%F0%9F%A4%8D%F0%9F%8D%AB" target="_blank">
  Reply whenever you feel ready
</a>
  `;

  document.body.appendChild(card);
  setTimeout(() => card.classList.add("show"), 100);
}
