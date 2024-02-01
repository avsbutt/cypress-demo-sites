
import 'cypress-iframe'

describe("Handling iFrames",()=>{
    

    it.skip("Method 1 ", ()=>{

        cy.visit("https://the-internet.herokuapp.com/iframe")

            
      

     let Frame = cy.get("#mce_0_ifr")
        .its('0.contentDocument.body')
        .should('be.visible')
         .then(cy.wrap)
    

            Frame.clear().type("hello g {ctrl+a}")

            cy.get('[aria-label="Bold"]').click()


    })



    it.skip("Method 2 by writing code into command js file", ()=>{

        cy.visit("https://the-internet.herokuapp.com/iframe")

            
      /*   
          Add this in command js file 
      Cypress.Commands.add('getiframe', (frame)=>{

          return cy.get(frame)
          .its('0.contentDocument.body')
          .should('be.visible')
          .then(cy.wrap)
      
      })  */          





          cy.getiframe('#mce_0_ifr').clear().type("hello g {ctrl+a}")

            cy.get('[aria-label="Bold"]').click()


    })

   
    it("Method 3 Using Cypress PLUGIN ", ()=>{

      cy.visit("https://the-internet.herokuapp.com/iframe")

          
        cy.frameLoaded('#mce_0_ifr')
        cy.iframe('#mce_0_ifr').clear().type("hello g {ctrl+a}")

          cy.get('[aria-label="Bold"]').click()


  }) 
})