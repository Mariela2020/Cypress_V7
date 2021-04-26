// https://mindicador.cl/ no tiene los valores actualizados
// https://reqres.in/
const UF = [
    "29455",
    "29459",
    "29463",
    "29467",
    "29471",
    "29475",
    "29478",
    "29482",
    "29486",
    "29490",
    "29494",
    "29498",
    "29502",
    "29506",
    "29510",
    "29514",
    "29518",
    "29522",
    "29526",
    "29529"
  ]
  
  describe('Demo', function(){
  
    const UF = [
      "29455",
      "29459",
      "29463",
      "29467",
      "29471",
      "29475",
      "29478",
      "29482",
      "29486",
      "29490",
      "29494",
      "29498",
      "29502",
      "29506",
      "29510",
      "29514",
      "29518",
      "29522",
      "29526",
      "29529"
    ]
  
    beforeEach(function(){
  
       cy.visit('https://www.saucedemo.com/');
     });
  
     it('should have title value Swag Labs', function(){
  
       cy.title().should('eq', 'Swag Labs');
     });
  
     it('should redirect /inventory.html', function(){
  
       cy.fixture('example').then((example)=> {
        cy.get('[data-test="username"]').type(example.username);
        cy.get('[data-test="password"]').type(example.password);
        cy.get('[data-test="login-button"]').click();

       })
        
       cy.location('pathname').should('eq', '/inventory.html');
  
       cy.get('.inventory_item_name').should('contain.text', 'Sauce Labs ')
         .first().click()
      
       cy.get('.inventory_details_name').then(function($producto){
          const productotxt= $producto.text()
          cy.log(productotxt) 

          cy.writeFile('fichero.txt', '\nNombre del producto: ' + productotxt + ';  ' + Date(), {flag: 'a+'} ) 
       }) 

       cy.get('.inventory_details_price').then(function($valorelem){
        
        //const fecha = new Date()
        const valortxt= $valorelem.text()
        cy.log(valortxt)
        const valoresp= '$29.99'
        expect(valortxt).eq(valoresp)
        const dia = 26;
        cy.writeFile('fichero.txt', '\nvalor del producto: ' +valortxt + ';  ' + Date(), {flag: 'a+'} )
        
        cy.fixture('UFmes').then((UFmes)=> {
          cy.log(UFmes.uf);
      
          })


        })
    })  
     
    


  })
  
  
  
  
  
  
  