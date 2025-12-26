//your JS code here. If required.
describe('Modal test', () => {
  beforeEach(() => {
    cy.visit('index.html')
  })

  it('should open modal when button is clicked', () => {
    cy.get('#openModal').click()
    cy.get('#modal').should('be.visible')
  })
})
