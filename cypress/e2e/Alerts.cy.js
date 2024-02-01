describe("Alerts",()=>{
    

    it.skip("OK Alert", ()=>{

        cy.visit("https://the-internet.herokuapp.com/javascript_alerts")
        cy.get("button[onclick='jsAlert()']").click()
        
        cy.on('window:alert', (t)=>{
            expect(t).to.contains('I am a JS Alert')
            cy.get("#result").should('have.text', 'You successfully clicked an alert')
        })
    })


    it.skip("OK / CANCEL Alert", ()=>{

        cy.visit("https://the-internet.herokuapp.com/javascript_alerts")
        cy.get("button[onclick='jsConfirm()']").click()
        
        cy.on('window:confirm', (t)=>{
            expect(t).to.contains('I am a JS Confirm')
           
        })

            cy.on('window:confirm', ()=> false )

            cy.get("#result").should('have.text', 'You clicked: Cancel')
       

    })





    it.skip("Input BOX with OK / CANCEL Alert", ()=>{

     cy.visit("https://the-internet.herokuapp.com/javascript_alerts")

      cy.window().then((popup)=>{
           
        cy.stub(popup,'prompt').returns('welcome')
        cy.on('window:prompt', ()=> false )
        })
             
        

     cy.get("button[onclick='jsPrompt()']").click()


       cy.get("#result").should('have.text', 'You entered: null')
    })

    

    it("Input BOX with OK / CANCEL Alert", ()=>{


        cy.visit("https://admin:admin@the-internet.herokuapp.com/basic_auth")

        //cy.visit("https://the-internet.herokuapp.com/basic_auth", { auth: {username: "admin", password:"admin"}})
        cy.get("#content").contains('Congratulations')
   
       })
   


})