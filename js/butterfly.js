let score = 0;
const butterflyImages = [
    "img/butterfly1.png",  
    "img/butterfly2.png",
    "img/butterfly3.png",
    "img/butterfly4.png"
];

function startGame() {
    document.getElementById("score").textContent = 0;
    score = 0;
    document.getElementById("gameArea").innerHTML = "";
    spawnButterflies(5);
}

function spawnButterflies(count) {
    for (let i = 0; i < count; i++) {
        let butterfly = document.createElement("img");
        butterfly.src = butterflyImages[Math.floor(Math.random() * butterflyImages.length)];
        butterfly.classList.add("butterfly");
        butterfly.style.left = Math.random() * 560 + "px";
        butterfly.style.top = Math.random() * 360 + "px";
        document.getElementById("gameArea").appendChild(butterfly);
        butterfly.addEventListener("click", catchButterfly);
        animateButterfly(butterfly);
    }
}

function catchButterfly(event) {
    event.target.remove();
    score++;
    document.getElementById("score").textContent = score;
}

function animateButterfly(butterfly) {
    let moveInterval = setInterval(() => {
        if (!document.body.contains(butterfly)) {
            clearInterval(moveInterval);
            return;
        }
        let newX = Math.random() * 560;
        let newY = Math.random() * 360;
        butterfly.style.transition = "left 1s linear, top 1s linear";
        butterfly.style.left = newX + "px";
        butterfly.style.top = newY + "px";
    }, 1000);
}