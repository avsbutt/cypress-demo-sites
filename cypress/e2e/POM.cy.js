import { data } from "jquery"
import Login from "../PageObjects/LoginPage"

describe ("POM", ()=>{

    it("POM Login ", ()=>{
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        cy.get("input[placeholder='Username']").type('Admin').should('have.value', 'Admin')
        cy.get("input[placeholder='Password']").type('admin123')
        cy.get("button[type='submit']").click()
        
        
    })
   
    it.only("POM Login ", ()=>{

        cy.fixture("orangeHRM.json").then((data)=>{                    //-----ONLY USED FOR FIXTURES FILES------ 

            cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        
            const ln=new Login
            ln.setUserName(data.username)
            ln.setPassword(data.Password)
            ln.ClickLoginButton
            ln.VerifyLogin

           
            
         })
        
        
    })
})