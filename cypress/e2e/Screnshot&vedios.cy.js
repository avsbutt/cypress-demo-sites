describe ("SS and Vedios", ()=>{
    it("Takes a Screenshot", ()=>{


        cy.visit("https://demo.opencart.com/")
        Cypress.Screenshot.defaults({ capture: 'fullPage' });
        cy.screenshot('SS 1')
        //cy.get("#iPhone").should()
    })
})