document.addEventListener('DOMContentLoaded', function() {
    const tooltipTrigger = document.querySelector('.has-tooltip');
    const tooltip = document.querySelector('.tooltip');

    tooltipTrigger.addEventListener('click', function(event) {
        event.preventDefault(); // Предотвращаем переход по ссылке

        // Убираем класс активной подсказки, если он уже установлен
        if (tooltip.classList.contains('tooltip_active')) {
            tooltip.classList.remove('tooltip_active');
            return;
        }

        // Получаем текст из атрибута title
        const tooltipText = tooltipTrigger.getAttribute('title');
        tooltip.textContent = tooltipText;

        // Устанавливаем позицию подсказки
        const rect = tooltipTrigger.getBoundingClientRect();
        tooltip.style.left = `${rect.left + window.scrollX}px`;
        tooltip.style.top = `${rect.bottom + window.scrollY + 5}px`; // немного ниже элемента

        // Добавляем класс активной подсказки
        tooltip.classList.add('tooltip_active');
    });

    // Закрытие подсказки при клике вне её
    document.addEventListener('click', function(event) {
        if (!tooltipTrigger.contains(event.target) && !tooltip.contains(event.target)) {
            tooltip.classList.remove('tooltip_active');
        }
    });
});
