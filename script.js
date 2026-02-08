const chocolate = document.getElementById("chocolate");
const girl = document.getElementById("girl");
const gameArea = document.getElementById("gameArea");

let escapeCount = 0;
const maxEscapes = 6;

chocolate.addEventListener("click", () => {
  if (escapeCount < maxEscapes) {
    moveChocolate();
    moveGirl();
    escapeCount++;
  } else {
    catchChocolate();
  }
});

function moveChocolate() {
  const maxX = gameArea.clientWidth - 80;
  const maxY = gameArea.clientHeight - 80;

  const x = Math.random() * maxX;
  const y = Math.random() * maxY;

  chocolate.style.left = `${x}px`;
  chocolate.style.top = `${y}px`;
}

function moveGirl() {
  girl.style.left = chocolate.style.left;
}

function catchChocolate() {
  chocolate.style.display = "none";
  startChocolateRain();
  setTimeout(addSignatureCard, 800);
}

function startChocolateRain() {
  for (let i = 0; i < 25; i++) {
    const drop = document.createElement("div");
    drop.className = "choco-rain";
    drop.textContent = "🍫";
    drop.style.left = Math.random() * 100 + "vw";
    drop.style.animationDelay = Math.random() * 0.5 + "s";
    document.body.appendChild(drop);

    setTimeout(() => drop.remove(), 3000);
  }
}

function addSignatureCard() {
  const card = document.createElement("div");
  card.className = "signature-card";

  card.innerHTML = `
    <h2>— Ambuj 🤍</h2>
    <p>Happy Chocolate Day, Gauri 🍫</p>
    <a href="https://wa.me/?text=I%20caught%20the%20chocolate%20and%20my%20heart%20too%20🤍🍫" target="_blank">
      Reply whenever you feel ready
    </a>
  `;

  document.body.appendChild(card);

  setTimeout(() => card.classList.add("show"), 100);
}
