describe('Tests Suites', function() 
{

  it('Flujo Catalogo Corredora',function ()  
  {
      cy.visit('https://ww2.toctoc.com/gestioncorredor/')
      cy.title().should('eq','TOCTOC.com - Gestión corredor - Planes de publicación')

      cy.get('.toggle-button').click()
      cy.get(':nth-child(7)>button').click()
      cy.get('.containerList > :nth-child(13) > a > strong').click()
      cy.get('.tt').should('be.visible').and('contain','Catálogo de Corredoras')

      cy.get('#searchBoxInput').type('Acom')
      cy.get('#btnBusca').click()
      cy.get('.sld-item').invoke('removeAttr', 'target').click()
      //cy.get('.sld-item').invoke('removeAttr', 'rel').click()
     
     // cy.get('.sld-item').eq(-5).invoke('removeAttr', 'rel').click()
    




  //})

    // it('Windows pop up', () =>{
      /*  const pop_url = "https://ww2.toctoc.com/gestioncorredor/corredoras/propiedades/acom-propiedades/7006"
        cy.window().then(win =>{
           const stub = cy.stub(win, 'open').as('windowopen')

        })
        // cy.get('.tipo').click({force:true})
        cy.get('.sld-item').eq(-5).click()
        cy.get('@windowopen').should('be.calledWith', pop_url)
        cy.window().then(win =>{
          
          win.location.href = pop_url
          cy.get('#region').click()

        })*/

      }) 
    
      //cy.get('.tt').should('be.visible').and('contain','Catálogo de Corredoras'

})  

