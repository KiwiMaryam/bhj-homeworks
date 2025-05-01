document.addEventListener('DOMContentLoaded', function() {
    const tooltipTriggers = document.querySelectorAll('.has-tooltip');
    const tooltip = document.querySelector('.tooltip');

    tooltipTriggers.forEach(trigger => {
        trigger.addEventListener('click', function(event) {
            event.preventDefault();

            // Скрываем подсказку, если она уже активна
            if (tooltip.classList.contains('tooltip_active')) {
                tooltip.classList.remove('tooltip_active');
                return;
            }

            // Получаем текст подсказки из атрибута title
            const tooltipText = trigger.getAttribute('title');
            tooltip.textContent = tooltipText;

            // Позиционирование подсказки
            const rect = trigger.getBoundingClientRect();
            tooltip.style.left = `${rect.left + window.scrollX}px`;
            tooltip.style.top = `${rect.bottom + window.scrollY + 5}px`;

            // Показываем подсказку
            tooltip.classList.add('tooltip_active');
        });
    });

    document.addEventListener('click', function(event) {
        // Закрываем подсказку, если кликнули вне элемента или подсказки
        const isClickInsideTooltip = tooltip.contains(event.target);
        const isClickInsideTrigger = Array.from(tooltipTriggers).some(trigger => trigger.contains(event.target));

        if (!isClickInsideTrigger && !isClickInsideTooltip) {
            tooltip.classList.remove('tooltip_active');
        }
    });
});
