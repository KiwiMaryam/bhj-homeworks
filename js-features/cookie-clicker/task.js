const cookie = document.getElementById('cookie');
const clickerCounter = document.getElementById('clicker__counter');

let clickCount = 0;
let isEnlarged = false;

// Функция для обработки клика по печеньке
cookie.addEventListener('click', () => {
    clickCount++;
    clickerCounter.textContent = clickCount;

    if (isEnlarged) {
        cookie.width = 200;
        cookie.height = 200;
    } else {
        cookie.width = 220;
        cookie.height = 220;
    }
    
    // Меняем состояние
    isEnlarged = !isEnlarged;
});
