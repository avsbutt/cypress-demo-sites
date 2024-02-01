describe("Data Driven Testing from Fixture file",()=>{

   

   it.skip(" Inputs from Fixture ", ()=>{
   
    
    cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    
    cy.fixture('orangeHRM.json').then( (data)=>{

    cy.xpath("//input[@placeholder='Username']").type(data.username)
    cy.xpath("//input[@placeholder='Password']").type(data.password)
    cy.xpath("//button[@type='submit']").click()
    cy.xpath("//h6[@class='oxd-text oxd-text--h6 oxd-topbar-header-breadcrumb-module']").should('have.text',"Dashboard")

     }) 
    })



    // Using userdata as hook and make it global

    let userdata
    before(()=>{
       cy.fixture('orangeHRM.json').then( (data)=>{
        userdata = data;
      })
    })


    it("Inputs from Fixture using Hooks ( Before ) ", ()=>{
   
    
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        
        
    
        cy.xpath("//input[@placeholder='Username']").type(userdata.username)
        cy.xpath("//input[@placeholder='Password']").type(userdata.password)
        cy.xpath("//button[@type='submit']").click()
        cy.xpath("//h6[@class='oxd-text oxd-text--h6 oxd-topbar-header-breadcrumb-module']").should('have.text',"Dashboard")
    
          
    })
    



})