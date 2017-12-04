describe('Home', () => {
  beforeEach(() => cy.visit('/'));

  it('should change language', () => {
    cy.contains('Checkout other examples');

    cy
      .contains('Tieng Viet')
      .click();

    cy.contains('Xem thêm các ví dụ khác bên dưới');

    cy
      .contains('English')
      .click();

    cy.contains('Checkout other examples');
  });

  it('should redirect to calculation page', () => {
    cy
      .contains('Calculation')
      .click();

    cy
      .url()
      .should('contain', 'super-market');
  });

  it('should redirect to login page', () => {
    cy
      .contains('Authentication')
      .click();

    cy
      .url()
      .should('contain', 'login');
  });
});
