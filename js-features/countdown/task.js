// Получаем элемент таймера из DOM
const timerElement = document.getElementById('timer');

// Начальное значение таймера (59 секунд)
let secondsRemaining = parseInt(timerElement.textContent);

// Функция обновления таймера
function updateTimer() {
    // Уменьшаем значение на 1
    secondsRemaining--;
    
    // Обновляем отображение
    timerElement.textContent = secondsRemaining;
    
    // Если таймер достиг нуля
    if (secondsRemaining <= 0) {
        // Останавливаем таймер
        clearInterval(timerInterval);
        // Показываем уведомление
        alert('Вы победили в конкурсе!');
    }
}

// Запускаем таймер с интервалом в 1 секунду
const timerInterval = setInterval(updateTimer, 1000);
