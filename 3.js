const message = "I just want you to know how much I love you...";
const messageElem = document.getElementById("message");
let i = 0;

function typeMessage() {
  if (i < message.length) {
    messageElem.innerHTML += message.charAt(i);
    i++;
    setTimeout(typeMessage, 50);
  }
}
typeMessage();

document.getElementById("revealBtn").addEventListener("click", () => {
  document.getElementById("fullLetter").classList.remove("hidden");
  document.getElementById("revealBtn").style.display = "none";

  const music = document.getElementById("bgMusic");
  if (music.paused) {
    music.play();
  }
});

function createHeart() {
  const heart = document.createElement("div");
  heart.className = "heart";
  heart.innerHTML = "❤️";

  heart.style.left = Math.random() * 100 + "vw";
  heart.style.fontSize = (Math.random() * 20 + 20) + "px";
  heart.style.animationDuration = (Math.random() * 3 + 2) + "s";

  document.querySelector(".heart-container").appendChild(heart);

  setTimeout(() => heart.remove(), 5000);
}

setInterval(createHeart, 300);