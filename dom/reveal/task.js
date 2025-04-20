function revealOnScroll() {
    const reveals = document.querySelectorAll('.reveal');
    reveals.forEach(reveal => {
        const rect = reveal.getBoundingClientRect();
        // Проверяем, попадает ли элемент в область видимости
        if (rect.top < window.innerHeight && rect.bottom > 0) {
            reveal.classList.add('reveal_active');
        }
    });
}

// Назначаем обработчик события scroll
window.addEventListener('scroll', revealOnScroll);

// Запускаем функцию сразу, чтобы проверить элементы на старте
revealOnScroll();