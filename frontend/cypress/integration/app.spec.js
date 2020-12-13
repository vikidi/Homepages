describe('Home Page', function() {
  /*beforeEach(function() {
    cy.request('POST', 'http://localhost:3001/api/tests/reset');
    cy.createUser({ email: 'test@test', name: 'Test User', password: 'test_pass' });
  });*/

  it('Front page is shown', function() {
    cy.visit('http://localhost:3000')
    cy.contains('Hello from my homepage!')
  })
})