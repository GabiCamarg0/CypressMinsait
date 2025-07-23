///<reference types= 'cypress'/>

describe('template spec', () => {
  it('Preencher campos', () => {
    cy.visit('https://testautomationpractice.blogspot.com/')
    cy.get('#name').type('teste')
    cy.get('input[placeholder="Enter EMail"]').type('teste@hotmail.com') 
    cy.get('#phone').type('8132-1992')
    cy.get('input[value="female"]').click()
    cy.get('input[type="checkbox"]').check('sunday')
    cy.get('#country').select('Canada')
    cy.get('#colors').select('Red')
    cy.get('#animals').select('Cat')
    cy.get('#datepicker').click()
    cy.get('a[data-date="24"]').click()
    cy.get('#datepicker').first().should('have.value','07/24/2025')
    cy.get('#singleFileInput').selectFile('cypress\\fixtures\\TESTE.png')
    //cy.get('singleFileInput').should('have.value','\\cypress\\fixtures\\TESTE.png')

    })
    it.only('Validar botão Enter', () => {
      cy.visit('https://testautomationpractice.blogspot.com/')
      cy.get('button[name="start"]').click()
      cy.get('button[name="stop"]').should('be.visible')
      
    });
  
})

