
const el = require('.elements').ELEMENTS
class Login {

   acessarURL(){
      cy.visit(el.url)

   }
   
   preencherUsername(username){
    cy.get(el.campoUsername).type(username)
   }
   
   preencherPassword(password){
    cy.get(el.campoPassWord).type(password)
   }

   clicarEmLogin(){
      cy.get(el.botaoLogin).click()

   }

}
export default new Login()