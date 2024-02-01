class Login
{

    // ------ LOGIN PAGE ELEMENTS------

    txtUserName = "input[placeholder='Username']"
    txtPassword = "input[placeholder='Password']"
    btnSubmit = "button[type='submit']"
    lblVerifyLogin = "cy.get('.oxd-topbar-header-breadcrumb > .oxd-text')"


    // ------ACTION METHODS------

    setUserName(Username)
    {
        cy.get(this.txtUserName).type(Username)
    }
    setPassword(password)
    {
        cy.get(this.txtPassword).type(password)
    }
    ClickLoginButton()
    {
        cy.get(this.btnSubmit).click()
    }
    VerifyLogin()
    {
        cy.get(this.lblVerifyLogin).should('have.text','Dashboard')
    }
    
}
export default Login