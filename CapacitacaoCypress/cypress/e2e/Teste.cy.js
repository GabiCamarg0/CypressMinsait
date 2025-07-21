describe('template spec', () => {
  it('Preencher campos', () => {
    cy.visit('https://testautomationpractice.blogspot.com/')
    cy.get('#name').type('teste')
    cy.get('input[placeholder="Enter EMail"]').type('teste@hotmail.com') 
    cy.get('#phone').type('8132-1992')
  })
  
})

