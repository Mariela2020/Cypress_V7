import {Given, When, Then, And} from "cypress-cucumber-preprocessor/steps"


Given('El usuario se encuentra en la página de Gestion Corredor', () =>{
    cy.visit('https://ww2.toctoc.com/gestioncorredor/')
    cy.title().should('eq','TOCTOC.com - Gestión corredor - Planes de publicación')
    
  });

  And('Hace click sobre el botón Ver Planes',()=>{
    cy.get('.gCdesktop > :nth-child(2) > a').click()
  });

  And('Visualiza la información del plan seleccionado y hace click al botón Contratar',()=>{
    cy.get('.inicia > .col-12 > .plan-btn > .btn').click({force:true})
  });

  When('Registrar Usuario',()=>{
    cy.get('#nombreUser').type('Mariela Hurtado')
    cy.get('#telefonoUser').type('+56993947209')
    cy.get('#emailUser').type('hurtadomariela2@gmail.com')
    cy.get('#password').type('#password')
    cy.get('#nextStep').click()
  });

  And('Llena los formularios con los campos solicitados',()=>{

    cy.get('#razonSocial').type('Prueba de Flujo QA')
    cy.get('#rutFacturacion').clear().type('267008469')
    cy.get('#nombreFantasia').type('Tuinmueble.com')
    cy.get('#giro').type('Giro 123')
    cy.get('#telefono').type('+56993947209')
    cy.get('#nextStep').click()
    cy.get('#representanteLegal').type('Mariela Hurtado')
    cy.get('#rutRepresentanteLegal').clear().type('267008469')
    cy.get('#emailFacturacion').type('mariela.hurtado@toctoc.com')
    cy.get('#direccionFacturacion').type('Manuel Rodriguez')
    cy.get('#region').select('13')
    cy.get('#comuna').select('339')
      
  });

  And('Tilda el checkbox Declaro conocer y aceptar los Términos y condiciones de TOCTOC del Plan',()=>{
    cy.get('#aceptaTerminos').click()
  });

  And('Darle click al boton Enviar',()=>{
    cy.get('.btn-danger').click()
  });

  Then('Se debe redireccionar a la página Detalle del contrato del plan a contratar',()=>{
    
   // cy.get('.title > :nth-child(2)'.should('be.visible').and('contain','paso 4/4'))
    cy.get('.btn'.click())
    //cy.get('div.pago__Productos__Extra__detalle.contenedor-padre:nth-child(4) section.flujo__pago div.container.detallePago div.row.detalle__datos:nth-child(5) div.btn-next.col-12 a.btn.btn-danger.button.btn-block > span:nth-child(1)').click()
    cy.get('.modal-footer > .btn').click()
  //  cy.get('.modal-footer > .btn').click()
    cy.url().should('include', 'https://ventas.toctoc.com/')
  });
 
  
 