describe('Tests Suites', function() {
  
    before(function(){
       cy.fixture('testdata').then(function(data){
         this.data=data
  
       })
  
      
    })
   
    it('Flujo Producto Marketing', function() {
     
        cy.visit('https://ww2.toctoc.com/gestioncorredor/')
        cy.get('.menu__section--profile > a').click()
        //cy.route2("${ssoGatewayUrl}/**").as('sso')
        cy.intercept("${ssoGatewayUrl}/**").as('sso')
        cy.get('#email').type(this.data.email)
        cy.get('#password').type(this.data.password)
        cy.get('.btn > span').click()
        cy.title().should('eq','TOCTOC.com - Gestión corredor - Planes de publicación') 
        cy.get('.gCdesktop > :nth-child(3) > a').click()
        cy.get(':nth-child(1) > .item_superior > .desktop').click()
        cy.get('.modal-footer > :nth-child(2) > .btn').click()
        cy.get('.title > :nth-child(2)').should('be.visible').and('contain','paso 1/3')
        cy.wait(3000)
        cy.get('#nextStep').click()
        cy.get('.title > :nth-child(2)').should('be.visible').and('contain','paso 2/3')
        cy.get('#aceptaTerminos').click()
        cy.get('.btn-danger').click()
        cy.get('.title > :nth-child(2)').should('be.visible').and('contain','paso 3/3')
        cy.get('.btn').click()
        cy.title().should('eq','Pago de servicios')
        
        
      })
  
    })    
  