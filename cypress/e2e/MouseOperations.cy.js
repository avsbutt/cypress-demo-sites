import 'cypress-iframe'

require ('@4tw/cypress-drag-drop')

describe("Mouse Operations ",()=>{
    

    it.skip("Mouse Hover ", ()=>{

cy.visit("https://demo.opencart.com/")
cy.xpath("//a[normalize-space()='Desktops']").trigger('mouseover').click()
cy.get("div[class='dropdown-menu show'] li:nth-child(2) a:nth-child(1)").should('be.visible')


    })

    it("Mouse click ", ()=>{

    cy.visit("https://swisnl.github.io/jQuery-contextMenu/demo.html")

    //cy.get(".context-menu-one.btn.btn-neutral").trigger('contextmenu') //For Right Click Method 1
    cy.get('.context-menu-one.btn.btn-neutral').rightclick() // For Right Click Method 2
    cy.get('.context-menu-icon-copy > span').should('be.visible')
    
})


//clicking and checking Data in iFameee
it.only("Mouse click ", ()=>{
    cy.visit("https://www.w3schools.com/tags/tryit.asp?filename=tryhtml5_ev_ondblclick3")
    // cy.frameLoaded('#iframeResult',{force:true})
    // cy.iframe('#iframeResult').find("//iframe[@id='iframeResult']").trigger('dblclick')
    cy.iframe('#iframeResult').find("button[ondblclick='myFunction()']").should('be.visible').trigger('dblclick')
    cy.iframe('#field2').contains('Hello World!')

    
})
it("Drag and Drop ", ()=>{

    //PLUGIN IS INSTALLED ( require ('@4tw/cypress-drag-drop'))
     cy.visit("http://www.dhtmlgoodies.com/scripts/drag-drop-custom/demo-drag-drop-3.html")
     cy.wait(3000)
    cy.get("#box6").drag('#box106',{force:true})
})

it("Drag and Drop ", ()=>{
    cy.visit("https://www.countries-ofthe-world.com/all-countries.html")
    cy.get(':nth-child(2) > :nth-child(69)').scrollIntoView({duration:2000})
    cy.get(':nth-child(2) > :nth-child(69)').should('be.visible')

    cy.get(':nth-child(2) > :nth-child(17)').scrollIntoView({duration:2000})
    cy.get(':nth-child(2) > :nth-child(17)').should('be.visible')
})
})