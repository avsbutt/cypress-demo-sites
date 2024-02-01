
describe('My First Test', () => {

    it('Verify title ++ive Test', () => {
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        cy.title().should('eq', 'OrangeHRM')
    })

    it('Verify title --ive Test', () => {
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        cy.title().should('eq', 'OrangeHRM123')
    })

  })
