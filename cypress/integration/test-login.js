describe('Test Login Home', function() {
  
       
    it('Inicio de Sesion Home', function() {
     
        cy.visit('https://www.toctoc.com/')
        cy.get('#onesignal-slidedown-cancel-button').click()
        cy.title().should('eq','TOCTOC.com - Casas, Departamentos en Venta y Arriendo publicados en este portal inmobiliario') 
        cy.get('#btnLogin').click()
        cy.get('p.text-center > strong').should('be.visible').and('contain','Inicia sesión con tu cuenta')
        cy.intercept("${ssoGatewayUrl}/**").as('sso')
        //cy.route2("${ssoGatewayUrl}/**").as('sso')
        cy.get('[id="IngresoUsuario.CorreoElectronico"]').type('hurtadomariela2@gmail.com')
        cy.get('[id="IngresoUsuario.Contrasena"]').type('prueba')
        cy.get(':nth-child(5) > .btn').click()
        cy.get('.nom-user').should('be.visible').and('contain','Mariela')  
    })

})   