import {Given, When, Then, And} from "cypress-cucumber-preprocessor/steps"

const d = new Date
const date = [d.getDate(),
d.getMonth() + 1,
d.getFullYear()].join('-') 

const hora = [d.getHours(),
  d.getMinutes(),
  d.getSeconds()].join(':')


Given('El usuario se encuentra en la página de Gestión Corredor y Hace click sobre el Entrar', () =>{
    cy.visit('https://ww2.toctoc.com/gestioncorredor/') 
    cy.title().should('eq','TOCTOC.com - Gestión corredor - Planes de publicación')    
  });

And('Debe iniciar cuenta con credenciales de corredor valido', ()=>{

    cy.get('.menu__section--profile > a').click()
    cy.intercept("${ssoGatewayUrl}/**").as('sso')
    cy.get('#email').type('hurtadomariela2@gmail.com')
    cy.get('#password').type('prueba',{sensitive: true})
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

    cy.get('.btn-danger').click({force: true}) 

});

Then('Se debe redireccionar al Detalle del contrato y visualizar medio de pago disponibles', ()=>{

  //  cy.get('.title > :nth-child(2)').should('be.visible').and('contain','paso 3/3')
    
    cy.get(':nth-child(2) > span.total').then(function($valorelem){
        
        const totalrestxt= $valorelem.text()
        var totalres = totalrestxt
        cy.log(totalrestxt)
               
        cy.writeFile('producto.txt', '\n\nTotal Resumen: ' +totalrestxt + ';  ' + date + '  ' + hora, {flag: 'a+'} )
                  
      }) 

    // cy.wait(3000)
    cy.get('.btn').click({force: true})
    cy.title().should('eq','Pago de servicios')

    cy.get('.col-md-8 > :nth-child(2)').then(function($valorelem){
        
        const productotxt= $valorelem.text()
        cy.log(productotxt)
               
        cy.writeFile('producto.txt', '\nProducto: ' + productotxt + ';  ' + date + '  ' + hora, {flag: 'a+'} )
                  
      })

      cy.get('.body-process > :nth-child(2) > .row > .col-md-4 > .title-c').then(function($valorelem){
      
        const preciotxt= $valorelem.text()
        cy.log(preciotxt)
               
        cy.writeFile('producto.txt', '\nPrecio: ' + preciotxt + ';  ' + date + '  ' + hora, {flag: 'a+'} )
                  
      })

      cy.get(':nth-child(3) > .col-sm-12 > .title-c').then(function($valorelem){
      
        const ivatxt= $valorelem.text()
        cy.log(ivatxt)
               
        cy.writeFile('producto.txt', '\nIva: ' + ivatxt + ';  ' + date + '  ' + hora, {flag: 'a+'} )
                  
      })

      cy.get('.total > strong').then(function($valorelem){
      
        const totaldetxt= $valorelem.text()
        cy.log(totaldetxt)
               
        cy.writeFile('producto.txt', '\nTotal: ' + totaldetxt + ';  ' + date + '  ' + hora, {flag: 'a+'} )
                  
      })


});

