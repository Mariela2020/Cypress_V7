import {Given, When, Then, And} from "cypress-cucumber-preprocessor/steps"

const d = new Date
const date = [d.getDate(),
d.getMonth() + 1,
d.getFullYear()].join('-') 

const hora = [d.getHours(),
  d.getMinutes(),
  d.getSeconds()].join(':')

Given('El usuario se encuentra en la página de Gestion Corredor', () =>{
    cy.visit('https://ww2.toctoc.com/gestioncorredor/')
    //cy.title().should('eq','TOCTOC.com - Gestión corredor - Planes de publicación')
    
  });

  And('Hace click sobre el botón Ver Planes',()=>{
    cy.get('.gCdesktop > :nth-child(2) > a').click()
  });

  And('Visualiza la información del plan seleccionado y hace click al botón Contratar',()=>{
    cy.get('.inicia > .col-12 > .plan-btn > .btn').click({force:true})
    var precioUF = 1
    precioUF = { precioUF : (precioUF)};
    cy.writeFile('cypress/fixtures/dataprecio.json', precioUF);
  });

  When('Registra el Usuario',()=>{
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
    cy.get('.btn-danger').click()
    cy.wait(3000)

  });

  And('Visualizar el Detalle del contrato del plan a contratar',()=>{

    //cy.get('#verDetalle').click()
    
    cy.get('.item-flex > span.total').then(function($valorelem){    
    const totalrestxt= $valorelem.text()
    var totalres1= parseFloat(totalrestxt)
         
    cy.fixture('dataprecio').then((dataprecio) => {
      var precio = dataprecio.precioUF
      var precio1 = parseFloat(precio)
      var ivaUF = (precio1*0.19).toFixed(2)
      var precioesp= Number(precio1) + Number(ivaUF)
     
      expect(totalres1, "El Total del Resumen obtenido debe ser igual al Total esperado").eq(precioesp)

    })
    
    cy.writeFile('fichero.txt', '\n\nTotal Resumen: ' + totalrestxt + '; ' + date + '  ' + hora, {flag: 'a+'} )
    cy.get('.btn > span').click({force:true}) 
    cy.get('.modal-footer > .btn').click()
  })
})

Then('Visualizar el Detalle de Pago y medio disponible',()=>{
  cy.url().should('include', 'https://ventas.toctoc.com/')
  cy.get('.detalle > :nth-child(1) > .text').then(function($valorelem){
    const productotxt= $valorelem.text()  
    cy.writeFile('fichero.txt', '\nProducto: ' +productotxt + ';  ' + date + '  ' + hora, {flag: 'a+'} )
  })

  cy.get('.desktop > .title-c').then(function($valorelem){
    const preciotxt= $valorelem.text()
    var precio_obt = preciotxt.substring(11)
    var precio_obt1 = parseFloat(precio_obt)

    cy.fixture('dataprecio').then((dataprecio) => {
      var precio = dataprecio.precioUF

      expect(precio_obt1, "El Precio obtenido debe ser igual al Precio esperado").eq(precio)
      
      cy.writeFile('fichero.txt', '\n' + preciotxt + ';  ' + date + '  ' + hora, { flag: 'a+' })

    })
    
  }) 
  
  cy.get('.iva > .col-sm-12 > .title-c').then(function($valorelem){  
    const ivatxt= $valorelem.text() 
    var ivaobt= ivatxt.substring(8)
    var ivaobt1= ivaobt.replace(/,/g,'.')
    var ivaobt2= parseFloat(ivaobt1)
                 
    cy.fixture('dataprecio').then((dataprecio) => {
      var precioUF = dataprecio.precioUF
      var ivauf = (precioUF*0.19).toFixed(2)
      var ivauf1= parseFloat(ivauf)
      
      expect(ivaobt2, "El Iva obtenido debe ser igual al Iva esperado").eq(ivauf1)   
      cy.writeFile('fichero.txt', '\n' +ivatxt + ';  ' + date + '  ' + hora, {flag: 'a+'} )

    })
  })

  cy.get('.total > strong').then(function($valorelem){
    const totaldetxt= $valorelem.text()
    var totaldet = totaldetxt.substring(3)
    var totaldet1= totaldet.replace(/,/g,'.')
    var totaldet2= parseFloat(totaldet1)
  
    cy.fixture('datatotal1.json').then((datatotal) =>{
      var totalrestxt1 = datatotal.totalres
      var totalrestxt2= parseFloat(totalrestxt1)

      expect(totaldet2, "El Total obtenido debe ser igual al Total del Resumen").eq(totalrestxt2)
      cy.writeFile('fichero.txt', '\nTotal del producto: ' +totaldetxt + ';  ' + date + '  ' + hora, {flag: 'a+'} )
    
    })
  })  
}) 

 
  
 