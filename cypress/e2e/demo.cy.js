



describe("Check UI Elements",()=>{

    /* it("checking Radio Buttons", ()=>{
  
 
 
 
     
        cy.visit("https://demoqa.com/")
        cy.get(".category-cards > :nth-child(1)").click()  //card click
        cy.get(":nth-child(1) > .element-list > .menu-list > #item-2 > .text").click()
 
        //Check Visibility of buttons
        cy.get("label[for='yesRadio']").should('be.visible')
        cy.get("label[for='impressiveRadio']").should('be.visible')
 
 
         // Selecting Radio Buttons
        cy.xpath("//label[@for='yesRadio']").click()
        cy.get("#impressiveRadio").should('not.be.checked')
         
 
        cy.contains('You have selected Yes').should('be.visible')
 
 
        //cy.get("#impressiveRadio").check().should('be.checked')
        //cy.get("#yesRadio").should('not.be.checked')
 
 
 
     })
     */
  
     it("checking Check Boxes", ()=>{
  
 
 
 
     
         cy.visit("https://demoqa.com/")
         cy.get(".category-cards > :nth-child(1)").click()  //card click
         cy.get(':nth-child(1) > .element-list > .menu-list > #item-1 > .text').click()
  
         
          cy.xpath("(//*[name()='path'])[54]").click()  
 
          cy.xpath("(//*[name()='path'])[60]").click()
         cy.xpath("(//*[name()='path'])[63]").click()
         cy.xpath("(//*[name()='path'])[66]").click()
         
         
     })

     it("Practice",()=>{

        cy.visit("https://example.cypress.io/commands/actions")
        cy.get("input[value='0']")
        .invoke('val', 29)
        .trigger('change')
        .get('input[type=range]').siblings('p')
        .should('have.text', '26')
     })
 
 
  })