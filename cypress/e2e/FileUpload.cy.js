import 'cypress-file-upload';



// cy.fixture('your-empty-fixture.json', { allowEmpty: true }).then((data) => {
    // Use the data from the fixture here
//   });

describe("File Upload",()=>{
    

    it.only("Single File Upload Filee", ()=>{
        cy.visit("https://the-internet.herokuapp.com/upload")
        cy.get('#file-upload').attachFile('test.pdf', { allowEmpty: true })
        cy.get('#file-submit').click()
        cy.wait(4000)
        cy.get('h3').should('have.text', 'File Uploaded!')


    })

    it("File Upload -- Rename ", ()=>{
        cy.visit("https://the-internet.herokuapp.com/upload")
        cy.get('#file-upload').attachFile({filePath:'test.pdf', fileName:'NameChange.pdf'}, {allowEmpty: true})
        cy.get('#file-submit').click()
        cy.wait(3000)
        cy.get('h3').should('have.text', 'File Uploaded!')


    })

    it("Drag and Drop Upload -- File ", ()=>{
        cy.visit("https://the-internet.herokuapp.com/upload")
        cy.get('#drag-drop-upload').attachFile('test.pdf', { subjectType:'drag-n-drop' , allowEmpty: true })
        cy.wait(5000)
        cy.get('#drag-drop-upload > .dz-preview > .dz-details > .dz-filename > span').contains('test.pdf')
        
        
    })

    it("Multiple -- File Upload ", ()=>{
        cy.visit("https://davidwalsh.name/demo/multiple-file-upload.php")
        cy.get('#filesToUpload').attachFile(['test.pdf', 'test 2.pdf'], {allowEmpty: true} )
        cy.get(':nth-child(6) > strong').should('contains.text', 'Files You Selected:')
    })



    //SHADOW DOM LEFT NOT WORKING
    it("Multiple -- File Upload ", ()=>{
        cy.visit("https://www.htmlelements.com/demos/fileupload/shadow-dom/")
        cy.get('.smart-ui-component', {includeShadowDom:true}).should('exist').and('be.visible').attachFile('test.pdf')
        cy.wait(4000)
        cy.get('smart-item-name', {includeShadowDom:true}).contains('test.pdf')
        
    })

})