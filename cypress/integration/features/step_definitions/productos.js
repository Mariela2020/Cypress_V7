import {Given, When, Then, And} from "cypress-cucumber-preprocessor/steps"


Given('El usuario se encuentra en la página de Gestión Corredor y Hace click sobre el Entrar', () =>{
    cy.visit('https://ww2.toctoc.com/gestioncorredor/') 
    cy.title().should('eq','TOCTOC.com - Gestión corredor - Planes de publicación')    
  });

And('Debe iniciar cuenta con credenciales de corredor valido', ()=>{

    cy.get('.menu__section--profile > a').click()
    cy.intercept("${ssoGatewayUrl}/**").as('sso')
    cy.get('#email').type('hurtadomariela2@gmail.com')
    cy.get('#password').type('prueba')
    cy.get('.btn > span').click()
    cy.get('[href="https://sso.toctoc.com/?o=gc&url=aHR0cDovL3d3Mi50b2N0b2MuY29tL2dlc3Rpb25jb3JyZWRvci8="]').should('be.visible').and('contain','hurtadomarie')  
    
});

And('Hace click sobre el link Producto', ()=>{

    cy.get('.gCdesktop > :nth-child(3) > a').click()
});

And('Visualiza los productos y selecciona la tarjeta del producto a contratar', ()=>{

    cy.get(':nth-child(1) > .item_superior > .desktop').click()
    
});

When('Cuando el usuario Selecciona el producto a Contratar', ()=>{

    cy.get('.modal-footer > :nth-child(2) > .btn').click()

});

And('Se verifica los datos almacenado en cada formulario', ()=>{

    cy.get('.title > :nth-child(2)').should('be.visible').and('contain','paso 1/3')
    cy.wait(3000)
    cy.get('#nextStep').click()
    cy.get('.title > :nth-child(2)').should('be.visible').and('contain','paso 2/3')
    
});

And('Tilda el checkbox Declaro conocer y aceptar los Términos y condiciones de TOCTOC', ()=>{
    
    cy.get('#aceptaTerminos').click()
    
});

And('Hace click al botón Enviar', ()=>{

    cy.get('.btn-danger').click() 

});

Then('Se debe redireccionar al Detalle del contrato y visualizar medio de pago disponibles', ()=>{

    cy.get('.title > :nth-child(2)').should('be.visible').and('contain','paso 3/3')
    cy.wait(3000)
    cy.get('.btn').click()
    cy.title().should('eq','Pago de servicios')

});