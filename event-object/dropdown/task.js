document.addEventListener('DOMContentLoaded', function() {
    const dropdowns = document.querySelectorAll('.dropdown');

    dropdowns.forEach(dropdown => {
        const valueElement = dropdown.querySelector('.dropdown__value');
        const listElement = dropdown.querySelector('.dropdown__list');
        const items = dropdown.querySelectorAll('.dropdown__item');

        // Обработчик клика на элементе value
        valueElement.addEventListener('click', function(event) {
            event.stopPropagation();
            listElement.classList.toggle('dropdown__list_active');
        });

        // Обработчик клика на элементах списка
        items.forEach(item => {
            item.addEventListener('click', function(event) {
                event.preventDefault();
                const selectedValue = item.textContent; 
                valueElement.textContent = selectedValue;
                listElement.classList.remove('dropdown__list_active');
            });
        });
    });

    document.addEventListener('click', function() {
        dropdowns.forEach(dropdown => {
            const listElement = dropdown.querySelector('.dropdown__list');
            listElement.classList.remove('dropdown__list_active');
        });
    });
});
