describe('/ End Point', () => {
  it('Headers should include JSON content type', () => {
    cy.request('/')
      .its('headers')
      .its('content-type')
      .should('include', 'application/json');
  });
});
