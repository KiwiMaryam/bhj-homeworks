let deadCount = 0; // Счетчик убитых кротов
let lostCount = 0; // Счетчик промахов

function getHole(index) {
    return document.getElementById(`hole${index}`);
}

for (let i = 1; i <= 9; i++) {
    const hole = getHole(i);
    
    hole.onclick = function() {
        if (hole.classList.contains('hole_has-mole')) {
            deadCount++;
            document.getElementById('dead').textContent = deadCount;
            alert('Вы убили крота!');
        } else {
            lostCount++;
            document.getElementById('lost').textContent = lostCount;
            alert('Промах!');
        }

        // Проверка на победу или поражение
        if (deadCount === 10) {
            alert('Победа!');
            resetGame();
        } else if (lostCount === 5) {
            alert('Поражение!');
            resetGame();
        }
    };
}

function resetGame() {
    // Сброс счетчиков
    deadCount = 0;
    lostCount = 0;
    document.getElementById('dead').textContent = deadCount;
    document.getElementById('lost').textContent = lostCount;

    // Убираем класс hole_has-mole у всех лунок
    for (let i = 1; i <= 9; i++) {
        getHole(i).classList.remove('hole_has-mole');
    }
    
    // Случайным образом выбираем новую лунку для крота
    const randomIndex = Math.floor(Math.random() * 9) + 1; // Генерируем случайное число от 1 до 9
    getHole(randomIndex).classList.add('hole_has-mole');
}

// Инициализируем игру, добавляя крота в случайную лунку при загрузке
resetGame();
