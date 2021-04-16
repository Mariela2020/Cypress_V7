describe('Tests Suites', function() 
{
 // var uf= 29064.70; 
  var iva= 0.19;

  it('Flujo Planes Inicia',function ()  
  {
      cy.visit('https://ww2.toctoc.com/gestioncorredor/')
      cy.title().should('eq','TOCTOC.com - Gestión corredor - Planes de publicación')
      cy.get('.gCdesktop > :nth-child(2) > a').click()
      cy.get('.inicia > .col-12 > .plan-btn > .btn').click({force:true})
      cy.get('#nombreUser').type('Mariela Hurtado')
      cy.get('#telefonoUser').type('+56993947209')
      cy.get('#emailUser').type('hurtadomariela2@gmail.com')
      cy.get('#password').type('#password')
      cy.get('#nextStep').click()
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
      cy.get('#aceptaTerminos').click()
      cy.get('.btn-danger').click()
      cy.wait(3000)
      cy.get('#verDetalle').click()
      cy.get('div.pago__Productos__Extra__detalle.contenedor-padre:nth-child(4) section.flujo__pago div.container.detallePago div.row.detalle__datos:nth-child(5) div.btn-next.col-12 a.btn.btn-danger.button.btn-block > span:nth-child(1)').click()
      cy.get('.modal-footer > .btn').click()
      //cy.get('.body-process > :nth-child(2) > .row > .col-md-4 > .title-c').contains.expect(valoruf).to.equal(true)
      //cy.get('.body-process > :nth-child(2) > .row > .col-md-4 > .title-c').writeFile('valorobtenido.txt');
      //cy.writeFile('valorobtenido.txt', '.body-process > :nth-child(2) > .row > .col-md-4 > .title-c')
      //cy.get(':nth-child(3) > .title-c').contains.('ufhoy')
     // cy.get(':nth-child(3) > .title-c').contains('29064')
     // cy.get(':nth-child(3) > .col-md-4 > .title-c').contains.expect(iva).to.equal(true)

      
    })

 })
