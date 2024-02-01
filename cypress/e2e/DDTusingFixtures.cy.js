const { get } = require("lodash")

describe("Data Driven Testing", ()=> {

   

    it("DDT with Multiple Data", ()=>{

        cy.fixture("orangeHRM2.json").then((data)=>{

            cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        
               data.forEach(userdata => {
        
        
                 cy.xpath("//input[@placeholder='Username']").type(userdata.username)
                 cy.xpath("//input[@placeholder='Password']").type(userdata.password)
                 cy.xpath("//button[@type='submit']").click()
        

               if(userdata.username == 'Admin' && userdata.password == 'admin123')
                 {
                     cy.get('.oxd-topbar-header-breadcrumb').should('have.text', userdata.expected)
                     cy.xpath("//p[@class='oxd-userdropdown-name']").click()
                     cy.get(':nth-child(4) > .oxd-userdropdown-link').click()   
                 }  

                    else 
                 {
                     cy.get(".oxd-text.oxd-text--p.oxd-alert-content-text").should('have.text',userdata.expected)
                }   
            })
     
        })
    
    }) 
})