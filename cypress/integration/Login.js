describe('Login', () => {
  beforeEach(() => cy.visit('/login'));

  it('should login', () => {
    cy
      .get('input[name=email]')
      .type('email@example.com');

    cy
      .get('input[name=password]')
      .type('123456');

    cy
      .contains('Submit')
      .click();

    cy
      .url()
      .should('contain', 'dashboard');

    cy.contains('You are logged in!');
  });
});
