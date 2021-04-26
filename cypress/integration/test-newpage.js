describe('Tests Suites', function() 
{

  it('Flujo Catalogo Corredora',function ()  
  {
      cy.visit('http://codenboxautomationlab.com/practice/')
      

  })
  
  it('invoke child tab', function(){

    cy.get('#opentab').invoke('removeAttr', 'target').click()
  })

})