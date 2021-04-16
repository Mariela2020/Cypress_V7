import {Given, When, And, Then} from "cypress-cucumber-preprocessor/steps"

Given("El usuario esta en la página de Toctoc y Hace click sobre el mensaje desplegado", () => {

    cy.visit("https://www.toctoc.com/");

});

And("Hacer click al botón Entrar", () =>{

    cy.get('#onesignal-slidedown-cancel-button').click()
   // cy.title().should('eq','TOCTOC.com - Casas, Departamentos en Venta y Arriendo publicados en este portal inmobiliario') 
    cy.get('#btnLogin').click()
    cy.get('p.text-center > strong').should('be.visible').and('contain','Inicia sesión con tu cuenta')
    cy.intercept("${ssoGatewayUrl}/**").as('sso')
    //cy.route2("${ssoGatewayUrl}/**").as('sso')
    cy.get('[id="IngresoUsuario.CorreoElectronico"]').type('hurtadomariela2@gmail.com')
    cy.get('[id="IngresoUsuario.Contrasena"]').type('prueba')
});

When("Ingresa los credenciales valida del usuario", ()=>{

    cy.get(':nth-child(5) > .btn').click()
});

Then("El sistema da la bienvenida al usuario", ()=>{
//Then("{string} El sistema da la bienvenida al usuario", (content)=>{
    
   // cy.contains(content, {timeout:10000}).should('be visible')
    cy.get('.nom-user').should('be.visible').and('contain','Mariela') 
});


