import {Given, When, Then, And} from "cypress-cucumber-preprocessor/steps"

const d = new Date
const date = [d.getMonth() + 1,
d.getDate(),
d.getFullYear()].join('/') + ' ' +
  [d.getHours(),
  d.getMinutes(),
  d.getSeconds()].join(':')

Given('El usuario se encuentra en Gestion Corredor', () =>{
    cy.visit('https://ww2.toctoc.com/gestioncorredor/')
    cy.title().should('eq','TOCTOC.com - Gestión corredor - Planes de publicación')
  });

  And('Hace click en el botón Ver Planes',()=>{
    cy.get('.gCdesktop > :nth-child(2) > a').click()
  });

  And('Selecciona el plan Inicia',()=>{
    cy.get('.inicia > .col-12 > .plan-btn > .btn').click({force:true})
  });

  When('Registra datos del Usuario',()=>{
    cy.get('#nombreUser').type('Mariela Hurtado')
    cy.get('#telefonoUser').type('+56993947209')
    cy.get('#emailUser').type('hurtadomariela2@gmail.com')
    cy.get('#password').type('#password')
    cy.get('#nextStep').click()
  });

  And('Llena los formularios del contrato',()=>{

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

  And('Aceptar los Términos y condiciones de TOCTOC',()=>{
    cy.get('#aceptaTerminos').click()
    cy.get('.btn-danger').click()
    cy.wait(3000)

  });

  And('Visualizar Detalle del contrato del plan a contratar',()=>{

    //cy.get('#verDetalle').click()
    cy.get('div.pago__Productos__Extra__detalle.contenedor-padre:nth-child(4) section.flujo__pago div.container.detallePago div.row.detalle__datos:nth-child(5) div.btn-next.col-12 a.btn.btn-danger.button.btn-block > span:nth-child(1)').click()
   // cy.get('.modal-footer > .btn').click()
    cy.get(':nth-child(2) > span.total').then(function($valorelem){    
      const totalrestxt= $valorelem.text()
      var totalres = totalrestxt
      cy.log(totalrestxt)        
      cy.writeFile('fichero.txt', '\n\nTotal Resumen: ' +totalrestxt + ';  ' + date, {flag: 'a+'} )
    })
   
    cy.get('.modal-footer > .btn').click()
    //cy.get('.btn-danger').click()  
  
  });

  Then('Visualizar Detalle de Pago', ()=>{
     
    cy.url().should('include', 'https://ventas.toctoc.com/')

    cy.get('.col-md-8 > :nth-child(2)').then(function($valorelem){
        
      const productotxt= $valorelem.text()
      cy.log(productotxt)       
      cy.writeFile('fichero.txt', '\n\nProducto: ' +productotxt + ';  ' + date, {flag: 'a+'} )
                
    })

    cy.get('.body-process > :nth-child(2) > .row > .col-md-4 > .title-c').then(function($valorelem){
      
      const preciotxt= $valorelem.text()
      cy.log(preciotxt)
      cy.writeFile('fichero.txt', '\nPrecio del producto: ' +preciotxt + ';  ' + date, {flag: 'a+'} )
                
    })
    
    cy.get(':nth-child(3) > .col-sm-12 > .title-c').then(function($valorelem){
      
        const ivatxt= $valorelem.text()
        cy.log(ivatxt)             
        cy.writeFile('fichero.txt', '\nValor del producto: ' +ivatxt + ';  ' + date, {flag: 'a+'} )
                    
    })  

    cy.get('.total > strong').then(function($valorelem){
      
      const totaldetxt= $valorelem.text()
      //var totaldet = totaldetxt
      cy.log(totaldetxt)
      //const valoresp= '$29.99'
      //cy.log(totalres)
      //expect(totalres).eq(totaldet)     
      cy.writeFile('fichero.txt', '\nIva del producto: ' +totaldetxt + ';  ' + date, {flag: 'a+'} )
    
  })  

  And('Selecciona el plan Crece',()=>{
    cy.get('.crece > .col-12 > .plan-btn > .btn').click({force:true})
  });

  And('Selecciona el plan Acelera',()=>{
    cy.get('.acelera > .col-12 > .plan-btn > .btn').click({force:true})
  });

  And('Selecciona el plan Eacala',()=>{
    cy.get('.acelera > .col-12 > .plan-btn > .btn').click({force:true})
  });

  
  });
 
  