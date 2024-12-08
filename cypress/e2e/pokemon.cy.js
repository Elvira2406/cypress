describe('Покупка аватара', function () {

    it('e2e тест на покупку нового аватара для тренера', function () {
         cy.visit('https://pokemonbattle.ru/');
         cy.get(':nth-child(1) > .auth__input').type('nurgalieva.24@yandex.ru');
         cy.get('#password').type('ZLQ-i5G-R9T-G76');
         cy.get('.auth__button').click();
         cy.wait(500);
         cy.get('.header__container > .header__id').click();
         cy.get('[href="/shop"]').click({ force: true });
         cy.wait(500);
         cy.get('.available > button').first().click({ force: true }); 
         cy.get('.pay__payform-v2 > :nth-child(2) > .pay_base-input-v2').type('4111111111111111');
         cy.get(':nth-child(1) > .pay_base-input-v2').type('10/25');
         cy.get('.pay-inputs-box > :nth-child(2) > .pay_base-input-v2').type('125');
         cy.get('.pay__input-box-last-of > .pay_base-input-v2').type('sam debns');
         cy.get('.pay-btn').click();
         cy.get('#cardnumber').type('56456');
         cy.get('.payment__submit-button').click();
         cy.get('.payment__font-for-success').contains('Покупка прошла успешно');
         cy.get('.payment__font-for-success').should('be.visible');
         cy.get('.payment__adv').should('be.visible');
         cy.get('.payment__adv').should('have.css', 'color', 'rgb(85, 137, 241)');




     })


})      