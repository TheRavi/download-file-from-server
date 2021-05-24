describe('Filedownload End Point', () => {
  it('Headers should include JSON content type', () => {
    cy.request('/filedownload/abcd.pdf')
      .its('headers')
      .its('content-type')
      .should('include', 'application/json');
  });
  it('Download file', () => {
    cy.request('/filedownload/wsgui.pdf');
  });
});
