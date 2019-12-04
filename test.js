describe('Testing Required Fields', () => {
    beforeEach(() => {
        cy.get('[data-cy=Submit]').click();
    });
    it('should require all fields', () => {
        cy.get('[data-cy=PasswordField]').type('password');
        cy.get('[data-cy=Submit').should('errors');
    });