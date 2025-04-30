document.addEventListener('DOMContentLoaded', function() {
    const tooltipTrigger = document.querySelector('.has-tooltip');
    const tooltip = document.querySelector('.tooltip');

    tooltipTrigger.addEventListener('click', function(event) {
        event.preventDefault();

        if (tooltip.classList.contains('tooltip_active')) {
            tooltip.classList.remove('tooltip_active');
            return;
        }

        const tooltipText = tooltipTrigger.getAttribute('title');
        tooltip.textContent = tooltipText;

        const rect = tooltipTrigger.getBoundingClientRect();
        tooltip.style.left = `${rect.left + window.scrollX}px`;
        tooltip.style.top = `${rect.bottom + window.scrollY + 5}px`;

        tooltip.classList.add('tooltip_active');
    });

    document.addEventListener('click', function(event) {
        if (!tooltipTrigger.contains(event.target) && !tooltip.contains(event.target)) {
            tooltip.classList.remove('tooltip_active');
        }
    });
});
