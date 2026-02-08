const chocolate = document.getElementById("chocolate");
const girl = document.getElementById("girl");
const area = document.getElementById("gameArea");

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
  const x = Math.random() * (area.clientWidth - 80);
  const y = Math.random() * (area.clientHeight - 80);
  chocolate.style.left = x + "px";
  chocolate.style.top = y + "px";
}

function moveGirl() {
  girl.style.left = chocolate.style.left;
}

function finishGame() {
  chocolate.style.display = "none";
  chocolateRain();
  setTimeout(showSignature, 700);
}

function chocolateRain() {
  for (let i = 0; i < 25; i++) {
    const c = document.createElement("div");
    c.className = "choco";
    c.textContent = "🍫";
    c.style.left = Math.random() * 100 + "vw";
    document.body.appendChild(c);
    setTimeout(() => c.remove(), 3000);
  }
}

function showSignature() {
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
