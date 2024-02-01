


describe('Assertion', () => {

//     it('implicit assertions', () => {
   
//         cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

//         cy.url().should('include', 'hrmlive.com')

//         .and('eq','https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
//         .and('not.contain','greenhrm')

//         cy.title().should('contain','HRM')
//         .and('eq', "OrangeHRM")

//         cy.get('.orangehrm-login-branding > img').should('be.visible')
//         .and('exist')

//         cy.xpath("//a").should('have.length','5') 
//         cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type("admin")
//         cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input')('have.value','admin')
        
//     })  
  
    it('explicit assertions', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.get('input[placeholder="Username"]').type('Admin')
        cy.get('input[placeholder="Password"]').type('admin123')
        cy.get('button[type="submit"]').click()


        let expName="Paul Collings";
        cy.get('.oxd-userdropdown-name').then( (x)=>{

                let actName=x.text()

                    expect(actName).to.equal(expName)   //BDD STYLE
                    expect(actName).to.not.equal(expName)

                    assert.equal(actName,expName)        //TDD STYLE
                    assert.not.equal(actName,expName)
                })
    })
})