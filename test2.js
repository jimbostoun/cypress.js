describe('Тестирование интернет-магазина', function () {
    it('Проверка покупки', function () {
         cy.visit('https://testqastudio.me/');
         cy.get('.post-11342 > .product-inner > .product-thumbnail > .woocommerce-LoopProduct-link > .attachment-woocommerce_thumbnail').click();
         cy.get('.summary > .cart > .product-button-wrapper > .quantity > .increase > svg').click();
         cy.get('.summary > .cart > .product-button-wrapper > .quantity > .increase > svg').click();
         cy.get('.summary > .cart > .product-button-wrapper > .single_add_to_cart_button').click();
         cy.get('.woocommerce-mini-cart__buttons > [href="https://testqastudio.me/cart/"]').click();
         cy.get('#menu-top > .menu-item-home > a').click();
         cy.get('.post-11337 > .product-inner > .product-thumbnail > .woocommerce-LoopProduct-link > .attachment-woocommerce_thumbnail').click();
         cy.get('.summary > .cart > .product-button-wrapper > .single_add_to_cart_button').click();
         cy.get('.woocommerce-mini-cart__buttons > [href="https://testqastudio.me/cart/"]').click();
         cy.get('.checkout-button').click();
         cy.get('#billing_first_name').type('Андрей');
         cy.get('#billing_last_name').type('Мочалов');
         cy.get('#billing_address_1').type('Пушкина 1');
         cy.get('#billing_city').type('Чебоксары');
         cy.get('#billing_state').type('Чувашская Республика');
         cy.get('#billing_postcode').type('428000');
         cy.get('#billing_phone').type('89876543210');
         cy.get('#billing_email').type('andrei@andrei.ru');
         cy.get('#place_order').click();
         cy.contains('Ваш заказ принят. Благодарим вас.');
     })
 })