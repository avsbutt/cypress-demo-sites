



describe('Windows Tabs', () => {

    it.skip('TABS', () => {

     cy.visit("https://the-internet.herokuapp.com/windows")
   

     cy.xpath("(//a[normalize-space()='Click Here'])[1]").invoke('removeAttr','target')
     cy.get("a[href='/windows/new']").click()
       
      cy.go('back')
    })



    it('TABS', () => {

        cy.visit("https://the-internet.herokuapp.com/windows")
        
   
        cy.get("a[href='/windows/new']").then((e)=>{

           var url=e.prop('href')

           cy.visit(url)
           
           cy.url().should('include', 'https://the-internet.herokuapp.com/windows/new')
          cy.wait(5000)
           cy.go('back')
      })

        })

        
     


})
    