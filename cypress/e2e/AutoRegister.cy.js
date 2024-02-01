Cypress.config()


Cypress.on('uncaught:exception', (err, runnable) => {
    // Handle the uncaught exception here
    // You can log the error, perform assertions, or take any desired action
    console.error('Uncaught exception:', err.message);
    
    // Prevent Cypress from failing the test due to the uncaught exception
    return false;

    // Disable animations
cy.window().then((win) => {
    win.angular.getTestability(document.querySelector('body')).setMicrotasksPerRun(1);
  });
  

})
describe("Check UI Elements",()=>{
    

    it("checking Radio Buttons", ()=>{

        cy.visit("https://demo.automationtesting.in/Register.html")


        // checking Visibility
        cy.get("input[value='Male']").should('be.visible')
        cy.get("input[value='FeMale']").should('be.visible')
         
        





     })


})
