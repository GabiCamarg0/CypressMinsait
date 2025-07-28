
const el = require('.elements').ELEMENTS
class Login {
   preencherUsername(username){
    cy.get(el.campoUsername).type(username)
   }
   
   preencherPassword(password){
    cy.get(el.campoPassWord).type(password)
   }

}
export default new Login()