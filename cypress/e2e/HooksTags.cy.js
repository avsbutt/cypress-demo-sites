//4 types of hooks
//Before,After,BeforeEach,AfterEach


describe("MyTestSuite",()=>{
    
 before(()=>{

      cy.log(" *****  LAUNCH App ***** ")

      })

 after(()=>{

      cy.log(" *****  CLOSE App ***** ") 

     })
 beforeEach(()=>{

       cy.log(" *****  LOGIN ***** ") 

     })

 afterEach(()=>{

            cy.log(" ***** LOGOUT ***** ") 

        })



    it("Search", ()=>{

       cy.log("***** Searching *****")
         
    })


    it("Advance", ()=>{

        cy.log("***** Advance Search *****")
          
     })

     it("Listng", ()=>{

        cy.log("***** Listing Product *****")
          
     })

     it("Listing", ()=>{

        cy.log("***** Listing Product *****")
          
     })

})