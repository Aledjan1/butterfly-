let score = 0;
let timer;
let timeLeft = 60;
const butterflyImages = [
    "img/butterfly1.webp",
    "img/butterfly2.webp",
    "img/butterfly3.webp",
    "img/butterfly4.webp",
    "img/butterfly5.webp"
];

function startGame() {
    score = 0;
    document.getElementById("score").textContent = score;
    document.getElementById("gameArea").innerHTML = "";
    document.getElementById("timer").textContent = timeLeft;
    startTimer();
    spawnButterflies(5);
}

function startTimer() {
    timer = setInterval(() => {
        timeLeft--;
        document.getElementById("timer").textContent = timeLeft;

        if (timeLeft <= 0) {
            clearInterval(timer);
            alert("Time's up! Your score: " + score);
            resetGame();
        }
    }, 1000);
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

function resetGame() {

    score = 0;
    timeLeft = 60;
    document.getElementById("score").textContent = score;
    document.getElementById("timer").textContent = timeLeft;
    document.getElementById("gameArea").innerHTML = "";
}
