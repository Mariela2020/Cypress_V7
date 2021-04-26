import {Given, When, Then, And} from "cypress-cucumber-preprocessor/steps"

const d = new Date
const date = [d.getMonth() + 1,
d.getDate(),
d.getFullYear()].join('/') + ' ' +
  [d.getHours(),
  d.getMinutes(),
  d.getSeconds()].join(':')

Given('El usuario está en Gestión Corredor', () =>{
    cy.visit('https://ww2.toctoc.com/gestioncorredor/') 
    cy.title().should('eq','TOCTOC.com - Gestión corredor - Planes de publicación')    
  })

And('Inicia cuenta con credenciales valida', ()=>{

    cy.get('.menu__section--profile > a').click()
    cy.intercept("${ssoGatewayUrl}/**").as('sso')
    cy.get('#email').type('hurtadomariela2@gmail.com')
    cy.get('#password').type('prueba')
    cy.get('.btn > span').click()
    cy.get('[href="https://sso.toctoc.com/?o=gc&url=aHR0cDovL3d3Mi50b2N0b2MuY29tL2dlc3Rpb25jb3JyZWRvci8="]').should('be.visible').and('contain','hurtadomarie')  
    
})

And('Hace click en el catalogo de Productos Marketing', ()=>{
    cy.get('.gCdesktop > :nth-child(3) > a').click()
})

When('Selecciona y visualiza información del Producto Propiedad Detacada', ()=>{  
    cy.get(':nth-child(1) > .item_superior > .desktop').click()
    cy.get('.modal-footer > :nth-child(2) > .btn').click()
})

And('Verifica los datos almacenados', ()=>{
    cy.get('.title > :nth-child(2)').should('be.visible').and('contain','paso 1/3')
    cy.wait(3000)
    cy.get('#nextStep').click()
    cy.get('.title > :nth-child(2)').should('be.visible').and('contain','paso 2/3')   
})

And('Declara conocer y aceptar los Términos y condiciones de TOCTOC', ()=>{
    cy.get('#aceptaTerminos').click()
})

And('Visualiza Detalle del contrato del producto a contratar', ()=>{
    cy.get('.btn-danger').click({force: true}) 
})

Then('Visualiza Detalle de Pago', ()=>{

  //  cy.get('.title > :nth-child(2)').should('be.visible').and('contain','paso 3/3')
    
    cy.get(':nth-child(2) > span.total').then(function($valorelem){
        const totalrestxt= $valorelem.text()
        var totalres = totalrestxt
        cy.log(totalrestxt)        
        cy.writeFile('producto.txt', '\n\nTotal Resumen: ' +totalrestxt + ';  ' + date, {flag: 'a+'} )
      }) 

    // cy.wait(3000)
    cy.get('.btn').click({force: true})
    cy.title().should('eq','Pago de servicios')
    cy.get('.col-md-8 > :nth-child(2)').then(function($valorelem){
        const productotxt= $valorelem.text()
        cy.log(productotxt)      
        cy.writeFile('producto.txt', '\nProducto: ' + productotxt + ';  ' + date, {flag: 'a+'} )
      })

      cy.get('.body-process > :nth-child(2) > .row > .col-md-4 > .title-c').then(function($valorelem){
        const preciotxt= $valorelem.text()
        cy.log(preciotxt)       
        cy.writeFile('producto.txt', '\nPrecio: ' + preciotxt + ';  ' + date, {flag: 'a+'} )
      })

      cy.get(':nth-child(3) > .col-sm-12 > .title-c').then(function($valorelem){
        const ivatxt= $valorelem.text()
        cy.log(ivatxt)
        cy.writeFile('producto.txt', '\nIva: ' + ivatxt + ';  ' + date, {flag: 'a+'} )
      })

      cy.get('.total > strong').then(function($valorelem){
        const totaldetxt= $valorelem.text()
        cy.log(totaldetxt)       
        cy.writeFile('producto.txt', '\nTotal: ' + totaldetxt + ';  ' + date, {flag: 'a+'} )
      })

})

When('Selecciona y visualiza información del Producto Ultima Ventas', ()=>{
    cy.get(':nth-child(2) > .item_superior > .desktop').click()
    cy.get('.modal-footer > :nth-child(2) > .btn').click()
    //cy.get(':nth-child(2) > .item-inferior > .item_compra > :nth-child(2) > .btn').click()
})

When('Selecciona y visualiza información del Producto Mailing', ()=>{
    cy.get(':nth-child(3) > .item_superior > .desktop').click()
 // cy.get(':nth-child(3) > .item-inferior > .item_compra > :nth-child(2) > .btn').click()
    cy.get('.modal-footer > :nth-child(2) > .btn').click()
})

When('Selecciona y visualiza información del Producto Banner', ()=>{
    cy.get(':nth-child(4) > .item_superior > .desktop').click()
    //cy.get(':nth-child(4) > .item-inferior > .item_compra > :nth-child(2) > .btn').click()
    cy.get('.modal-footer > :nth-child(2) > .btn').click()
})
    
When('Selecciona y visualiza información del Producto Banner + 5 PropDestacada', ()=>{
    cy.get(':nth-child(5) > .item_superior > .desktop').click()
    cy.get('.modal-footer > :nth-child(2) > .btn').click()
    //cy.get(':nth-child(5) > .item-inferior > .item_compra > :nth-child(2) > .btn').click()
});   
     
When('Selecciona y visualiza información del Producto Espacio Landing', ()=>{
    cy.get(':nth-child(6) > .item_superior > .desktop').click()
    cy.get('.modal-footer > :nth-child(2) > .btn').click()
}) 

When('Selecciona y visualiza información del Producto Mail500', ()=>{
    cy.get(':nth-child(7) > .item_superior > .desktop').click()
    cy.get('.modal-footer > :nth-child(2) > .btn').click()
    //cy.get(':nth-child(7) > .item-inferior > .item_compra > :nth-child(2) > .btn').click()
}) 

When('Selecciona y visualiza información del Producto Api Contacto', ()=>{
    cy.get(':nth-child(8) > .item_superior > .desktop').click()
    cy.get('.modal-footer > :nth-child(2) > .btn').click()
    //cy.get(':nth-child(8) > .item-inferior > .item_compra > :nth-child(2) > .btn').click()
}) 

When('Selecciona y visualiza información del Producto Propiedad Deatacada x5', ()=>{
    cy.get(':nth-child(9) > .item_superior > .desktop').click()
    cy.get('.modal-footer > :nth-child(2) > .btn').click()
    //cy.get(':nth-child(9) > .item-inferior > .item_compra > :nth-child(2) > .btn').click()
}) 

When('Selecciona y visualiza información del Producto Propiedad Deatacada x15', ()=>{
    cy.get(':nth-child(10) > .item_superior > .desktop').click()
    cy.get('.modal-footer > :nth-child(2) > .btn').click()
    //cy.get(':nth-child(10) > .item-inferior > .item_compra > :nth-child(2) > .btn').click()
}) 

When('Selecciona y visualiza información del Producto Propiedad Deatacada x30', ()=>{
    cy.get(':nth-child(11) > .item_superior > .desktop').click()
    cy.get('.modal-footer > :nth-child(2) > .btn').click()
    //cy.get(':nth-child(11) > .item-inferior > .item_compra > :nth-child(2) > .btn').click()
}) 

When('Selecciona y visualiza información del Producto Propiedad Deatacada x60', ()=>{
    cy.get(':nth-child(12) > .item_superior > .desktop').click()
    cy.get('.modal-footer > :nth-child(2) > .btn').click()
    //cy.get(':nth-child(12) > .item-inferior > .item_compra > :nth-child(2) > .btn').click()
}) 

