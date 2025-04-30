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
                const newCartProduct = document.createElement('div');
                newCartProduct.className = 'cart__product';
                newCartProduct.dataset.id = productId;

                const productImageElement = document.createElement('img');
                productImageElement.className = 'cart__product-image';
                productImageElement.src = productImage;

                const productCountElement = document.createElement('div');
                productCountElement.className = 'cart__product-count';
                productCountElement.textContent = quantity;

                newCartProduct.appendChild(productImageElement);
                newCartProduct.appendChild(productCountElement);
                cartList.appendChild(newCartProduct);
            }
        });
    });
});
