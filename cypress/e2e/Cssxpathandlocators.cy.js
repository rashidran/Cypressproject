//  css locators and xpath 
//we can select css selectors by various parameters
//there are three types of locators

//*tag id
//*tag class
//*tag attribute
//*tag class attribute

//tag id 

//syntax

//if only id, it will be like #autocomplete
//if tag id , it will be like input#autocomplete

//tag class

//syntax

// .class
// tag.class

//tag attribute

//syntax

// [attribute = 'value']

// tag[attribute = 'value']

//tag class attribute

// syntax

// .class[attribute = 'value']

// tag.class[attribute = 'value']


// describe ('my first test case' , () => {
//     it('first test' , () => {
//     cy.visit("https://www.amazon.in/")  //urlvisit
//     cy.get('#twotabsearchtextbox').type('Apple').click() //searchbox type action
//     cy.get("#nav-search-submit-button").click()
//     cy.get('[href="/minitv?ref_=nav_avod_desktop_topnav"]').click() //click action
//     cy.get('#n-title').contains("Category")

// })
// })

//for xpath we need to install x-path plugin from cypress.io site 

//after installing in commands.js file add this command <reference types = "cypress-xpath" />
//and one more step is add this command in e2e.js file require('cypress-xpath') if not we should include in each script file

// describe('Xpath' , ()=> {
//     it('xpathlocator' , ()=> {
//     cy.visit("https://www.amazon.in/")
//     cy.xpath("//input[@id='twotabsearchtextbox']").click()

//     })
// })