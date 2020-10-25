describe('Index page', () => {
  it('shows a "Hello, World!" message', () => {
    cy.visit('/')
    cy.contains('Hello, World!')
  })
})
