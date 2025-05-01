document.addEventListener('DOMContentLoaded', function() {
    const products = document.querySelectorAll('.product');
    const cartList = document.querySelector('.cart__products');

    products.forEach(product => {
        const quantityValue = product.querySelector('.product__quantity-value');
        const decreaseButton = product.querySelector('.product__quantity-control_dec');
        const increaseButton = product.querySelector('.product__quantity-control_inc');
        const addToCartButton = product.querySelector('.product__add');

        decreaseButton.addEventListener('click', () => {
            if (parseInt(quantityValue.textContent) > 1) {
                quantityValue.textContent = parseInt(quantityValue.textContent) - 1;
            }
        });

        increaseButton.addEventListener('click', () => {
            quantityValue.textContent = parseInt(quantityValue.textContent) + 1;
        });

        addToCartButton.addEventListener('click', () => {
            const productId = product.dataset.id;
            const productImage = product.querySelector('.product__image').src;
            const quantity = parseInt(quantityValue.textContent); 

            let cartProduct = cartList.querySelector(`.cart__product[data-id="${productId}"]`);

            if (cartProduct) {
                const cartProductCount = cartProduct.querySelector('.cart__product-count');
                cartProductCount.textContent = parseInt(cartProductCount.textContent) + quantity;
            } else {
                cartList.insertAdjacentHTML('beforeend', `
                    <div class="cart__product" data-id="${productId}">
                        <img class="cart__product-image" src="${productImage}" alt="Product Image">
                        <div class="cart__product-count">${quantity}</div>
                        <a href="#" class="cart__product-remove">&times;</a>
                    </div>
                `);
                
                // Добавляем обработчик для кнопки удаления
                const removeButton = cartList.querySelector(`.cart__product[data-id="${productId}"] .cart__product-remove`);
                removeButton.addEventListener('click', function(event) {
                    event.preventDefault();
                    cartList.removeChild(removeButton.closest('.cart__product'));
                });
            }
        });
    });
});
