import {Given, When, Then, And} from "cypress-cucumber-preprocessor/steps"


Given('El usuario se encuentra en la página Gestion Corredor', () =>{
    cy.visit('https://ww2.toctoc.com/gestioncorredor/')
    cy.title().should('eq','TOCTOC.com - Gestión corredor - Planes de publicación')
  });

  And('Hace click sobre el Menú Principal Corredoras - Catalogo de Corredoras',()=>{
    cy.get('.toggle-button').click()
    cy.get(':nth-child(7)>button').click()
    cy.get('.containerList > :nth-child(13) > a > strong').click()
    cy.get('.tt').should('be.visible').and('contain','Catálogo de Corredoras')

  });

  And('Busca Corredora por nombre y hace click al botón buscar',()=>{
    cy.get('#searchBoxInput').type('Acom')
    cy.get('#btnBusca').click()
      
    var newUrl = 'https://ww2.toctoc.com/gestioncorredor/corredoras/propiedades/acom-propiedades/7006';
    cy.window().then((win) => {
       cy.stub(win, 'open').as('windowOpen').callsFake(url => {
          newUrl = url;
        });
    })

    cy.get('.sld-item').eq(-4).click()
    cy.get('@windowOpen').should('be.called');
    cy.visit(newUrl)

  });

  When('Visualiza las propiedades de la corredora',()=>{

    cy.get('.title').should('contain.text', 'Acom Propiedades')
  })

  And('Filtra por Región y Comuna',()=> {
    cy.get('#region').select('13')
    cy.get('#comuna').select('337')
    cy.get('#btnBusca').click()
    cy.get('[tabindex="0"] > .lnk-info > .c-infores > .info-body > .region').should('contain.text', 'Providencia')

  })

  Then('Visualiza la ficha de la primera propiedad', ()=>{

    cy.window().then(win => {
        cy.stub(win, 'open').as('windowOpen');
       });
    
      cy.get('.sld-item').first().click()   
      cy.get('@windowOpen').should('be.calledWith', Cypress.sinon.match.string).then(stub => {
        cy.visit(stub.args[0][0]);
       // stub.restore;
      });
    
  })