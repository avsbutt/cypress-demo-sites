// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })




//Custom COMMAND 
//Get Element Using Label

import 'cypress-xpath';


Cypress.Commands.add('ClickLinksUsingLabel', (label)=>{
    cy.get('a').contains(label).click()
})

// LOGIN CUSTOM COMMAND
Cypress.Commands.add('LoginCred',(username, password)=>{
    

       cy.xpath("//input[@placeholder='Username']").type(username)
       cy.xpath("//input[@placeholder='Password']").type(password)
    
})
