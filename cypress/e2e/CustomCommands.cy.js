
describe('Custom Commands', ()=>{
     

    //CLICK ON LABEL USING CUSTOM CAOMMAND 
    it("Click Links using Label",()=>{

     cy.visit("https://demo.nopcommerce.com/")
     cy.ClickLinksUsingLabel("Apple MacBook Pro 13-inch")
    })

    //OVERWRITE AN EXISTING COMMAND 
    it("Overwrite an existing command",()=>{
       
        cy.visit("https://demo.nopcommerce.com/")
        
        cy.ClickLinksUsingLabel("APPLE MACBOOK PRO 13-INCH").click()
    })

    it.only("Login with Custom Command",()=>{
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        cy.LoginCred()
     })

    })