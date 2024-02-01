
describe('CSSLocators', () => {

    
    it('css locators', () => {
        cy.visit("http://www.automationpractice.pl/index.php")

            cy.get("#search_query_top").type("t shirt") //id 

            cy.get("[name='submit_search']").click()  //attribute
            
            cy.get(".lighter").contains("t shirt")  //Assertions
       
    })  

    })