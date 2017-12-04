describe('Super Market', () => {
  beforeEach(() => cy.visit('/super-market'));

  it('should do some add items to basket', () => {
    cy
      .contains('Orange')
      .click();

    cy
      .contains('Coffee')
      .click();

    cy
      .get('.list-group-item-success')
      .get('.badge')
      .contains('$13.50');
  });

  it('should reset', () => {
    cy
      .contains('Reset')
      .click();

    cy
      .get('.list-group-item-success')
      .get('.badge')
      .contains('$0.00');
  });
});
