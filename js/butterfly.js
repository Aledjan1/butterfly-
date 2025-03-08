let score = 0;
let timer;
let timeLeft = 60;  // Таймер на 60 секунд
const butterflyImages = [
    "img/butterfly1.png",  // Замініть на свої зображення
    "img/butterfly2.png",
    "img/butterfly3.png",
    "img/butterfly4.png"
];

function startGame() {
    score = 0;
    document.getElementById("score").textContent = score;
    document.getElementById("gameArea").innerHTML = "";
    document.getElementById("timer").textContent = timeLeft;  // Встановлюємо таймер на початок
    startTimer();  // Запускаємо таймер
    spawnButterflies(5);
}

function startTimer() {
    timer = setInterval(() => {
        timeLeft--;  // Зменшуємо час на 1 секунду
        document.getElementById("timer").textContent = timeLeft;
        
        if (timeLeft <= 0) {
            clearInterval(timer);  // Зупиняємо таймер
            alert("Time's up! Your score: " + score);  // Сповіщення після закінчення часу
            resetGame();
        }
    }, 1000);  // Таймер оновлюється кожну секунду
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
    // Очищаємо гру і скидаємо всі значення
    score = 0;
    timeLeft = 60;
    document.getElementById("score").textContent = score;
    document.getElementById("timer").textContent = timeLeft;
    document.getElementById("gameArea").innerHTML = "";
}
