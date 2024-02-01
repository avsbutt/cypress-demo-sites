Cypress.config()


Cypress.on('uncaught:exception', (err, runnable) => {
    // Handle the uncaught exception here
    // You can log the error, perform assertions, or take any desired action
    console.error('Uncaught exception:', err.message);
    
    // Prevent Cypress from failing the test due to the uncaught exception
    return false;

    cy.request('GET', 'https://restcountries.eu/rest/v1/all')
    .then(response => {
      // Check if the request was successful (status code 200)
      expect(response.status).to.eq(200);
      // Handle the response data
      console.log(response.body);
    });
  
  

})

describe("Check UI Elements",()=>{
    

  it.skip("checking Radio Buttons", ()=>{

  cy.visit("https://demo.automationtesting.in/Register.html")




        
            // checking Visibility and selecting radio
           cy.get("input[value='Male']").should('be.visible').check().should('be.checked')
           cy.get("input[value='FeMale']").should('be.visible').and('not.be.checked')
        
           //Select one checkBoxe
           // cy.get("#checkbox1").check().should('be.checked')
           //cy.get("#checkbox3").check().should('be.checked')
      
           //Select all checkBoxes
           cy.get("input[type='checkbox']").check().should('be.checked')
           cy.get("input[type='checkbox']").last().uncheck().should('not.be.checked')
   



     })
  

 it.skip("Selecting DropDowns", ()=>{
    
cy.visit("https://demo.automationtesting.in/Register.html")

//Select Dropdowns with input
cy.get("#select2-country-container").scrollIntoView().click({ force: true })
cy.get("input[role='textbox']").type('India').type('{enter}')

//Selecting Dropdown Value
  cy.get("#Skills")
  .select('C')
  .should('have.value', 'C')

  cy.get("#countries").select('Select Country')
  .should('have.value', '')

 })

 it.skip("Selecting Auto DropDowns", ()=>{
   
  cy.visit("https://www.wikipedia.org/")
  cy.get("#searchInput").type('Delhi')
  cy.get(".suggestion-title").contains('Delhi University').click()
  //cy.get("input[class='search mw-ui-background-icon-search']").type('Delhi')
  //cy.get(".results-list-container.view-border-box").contains('Delhi University')

})

it.skip("Selecting Auto DropDowns", ()=>{
   
  cy.visit("https://www.wikipedia.org/")
  cy.get("#searchInput").type('Delhi')
  cy.get(".suggestion-title").contains('Delhi University').click()
  //cy.get("input[class='search mw-ui-background-icon-search']").type('Delhi')
  //cy.get(".results-list-container.view-border-box").contains('Delhi University')

})


it("Dynamic DropDowns", ()=>{
   
  cy.visit("https://www.google.com/")
  cy.get("#APjFqb").type('Cypress Automation ')
  cy.wait(3000)

  //cy.get("div.wM6W7d>span").should('have.length', '13')

  cy.get("div.wM6W7d>span").each(  ($el, index, $list)=>{
     if($el.text()=='cypress automation tool')
     {
      cy.wrap($el).click()
     }
  })

  cy.get("#APjFqb").should('have.value', 'cypress automation tool')
})



})
