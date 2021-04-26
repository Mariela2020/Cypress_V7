import {Given, When, And, Then} from "cypress-cucumber-preprocessor/steps"

Given("Navega a la Pagina", () => {

    cy.visit('https://www.saucedemo.com/');
    cy.title().should('eq', 'Swag Labs');
});

And("Ingresa credenciales valida", () =>{
   
    cy.fixture('example').then((example)=> {
    cy.get('[data-test="username"]').type(example.username);
    cy.get('[data-test="password"]').type(example.password);
    cy.get('[data-test="login-button"]').click();

    })
})

When("Selecciona el articulo #3", () =>{

    cy.get('.inventory_item_name').should('contain.text', 'Sauce Labs ')
     //.first().click()
     //.last().click()
     //.eq(-2).click()
     .each(function($el, index, $listofElements){
        cy.log($el.text())

        if(index==3){
            $el.click()
        }

        if($el.text()== 'Sauce Labs Bolt T-Shirt'){
            $el.click()
        }
     }) 
})

Then("Compra el Articulo #3", () =>{

    cy.get('.inventory_details_price').then(function($valorelem){
    const fecha = new Date()
    const valortxt= $valorelem.text()
    cy.log(valortxt)     
    const valoresp= '$15.99'
    expect(valortxt).eq(valoresp)
        
    cy.writeFile('sampleFile.txt', '\n\nValor del producto: ' + valortxt + ';  ' + Date(), {flag: 'a+'} )     
           
    })
})

When("Selecciona el articulo #2", () =>{

    cy.get('.inventory_item_name').should('contain.text', 'Sauce Labs ')
     //.first().click()
     //.last().click()
     //.eq(-2).click()
     .each(function($el, index, $listofElements){
        cy.log($el.text())

        if(index==2){
            $el.click()
        }

        if($el.text()== 'Sauce Labs Bike Light'){
            $el.click()
        }
     }) 
})

Then("Compra el Articulo #2", () =>{

    cy.get('.inventory_details_price').then(function($valorelem){
    const fecha = new Date()
    const valortxt= $valorelem.text()
    cy.log(valortxt)     
    const valoresp= '$9.99'
    expect(valortxt).eq(valoresp)
        
    cy.writeFile('sampleFile.txt', '\n\nValor del producto: ' + valortxt + ';  ' + Date(), {flag: 'a+'} )     
           
    })
})


When("Selecciona el articulo #1", () =>{

    cy.get('.inventory_item_name').should('contain.text', 'Sauce Labs ')
     .first().click()
    
})

Then("Compra el Articulo #1", () =>{

    cy.get('.inventory_details_price').then(function($valorelem){
    const fecha = new Date()
    const valortxt= $valorelem.text()
    cy.log(valortxt)     
    const valoresp= '$29.99'
    expect(valortxt).eq(valoresp)       
    cy.writeFile('sampleFile.txt', '\n\nValor del producto: ' + valortxt + ';  ' + Date(), {flag: 'a+'} )     
           
    })
})


When("Selecciona el articulo #4", () =>{

    cy.get('.inventory_item_name').should('contain.text', 'Sauce Labs ')
    .eq(-3).click()
     
})

Then("Compra el Articulo #4", () =>{

    cy.get('.inventory_details_price').then(function($valorelem){
    const fecha = new Date()
    const valortxt= $valorelem.text()
    cy.log(valortxt)     
    const valoresp= '$49.99'
    expect(valortxt).eq(valoresp)      
    cy.writeFile('sampleFile.txt', '\n\nValor del producto: ' + valortxt + ';  ' + Date(), {flag: 'a+'} )     
           
    })
})

When("Selecciona el articulo #5", () =>{

    cy.get('.inventory_item_name').should('contain.text', 'Sauce Labs ')
     .eq(-2).click()
     
})

Then("Compra el Articulo #5", () =>{

    cy.get('.inventory_details_price').then(function($valorelem){
    const fecha = new Date()
    const valortxt= $valorelem.text()
    cy.log(valortxt)     
    const valoresp= '$7.99'
    expect(valortxt).eq(valoresp)    
    cy.writeFile('sampleFile.txt', '\n\nValor del producto: ' + valortxt + ';  ' + Date(), {flag: 'a+'} )     
           
    })
})

When("Selecciona el articulo #6", () =>{

    cy.get('.inventory_item_name').should('contain.text', 'Test.allTheThings() T-Shirt (Red)')
     .last().click()
    
})

Then("Compra el Articulo #6", () =>{

    cy.get('.inventory_details_price').then(function($valorelem){
    const fecha = new Date()
    const dia= fecha.getDate();
    cy.log(dia);
    const valortxt= $valorelem.text()
    cy.log(valortxt)     
    const valoresp= '$15.99'
    expect(valortxt).eq(valoresp)     
    cy.writeFile('sampleFile.txt', '\n\nValor del producto: ' + valortxt + ';  ' + Date(), {flag: 'a+'} )     
    
   


    })
})
