//assertions in cypress



// there are two types of assertions in cypress

//implicit assertions or built-in assertions

//*Should
//*and

// keywords

//*eq
//i*nclude
//*contain
//*have.value
//*exist
//*have.length

//explicit assertions

//*expect - bdd
//*assert - tdd 


// describe("Assertions" , () =>{
//     it("implicit assertion", () => {
//     cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
//     cy.url().should("include","orangehrmlive.com" ) //just need to have the word we mentioned , thats why we used include keyword
//     cy.url().should("eq","https://opensource-demo.orangehrmlive.com/web/index.php/auth/login") //eq is need to have the full url ,equal to the exact text in the url
//     cy.url().should("contain", "orangehrm")


//we can write like this also

// cy.url().should("include","orangehrmlive.com" ).should("eq","https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
// .should("contain", "orangehrm")

// we can see used many should assertions , instead of that we can use and also

// cy.url().should("include","orangehrmlive.com" ).and("eq","https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
// .and("contain", "orangehrm")

//we can do negative assertion also we should do it like by keywords not.contain , not.eq

// cy.url().should("include","orangehrmlive.com" )
// .and("not.eq","https://opinsource-demo.orangehrmlive.com/web/index.php/auth/login")
// .and("not.contain", "orngehrm")

// cy.title().should("include" , "HRM").and("eq", "OrangeHRM").and("contain" , "HRM")

// for checking visibility of the element in the web page , we should use cy.get("then address") and use key word like before.visible
// and exist

// cy.get("div.orangehrm-login-slot").should("be.visible").and("exist")

//for checking the links in the web page , we need to use xpath locators , all the links have anchor tag called a , so we write like
// this

// cy.xpath("//a").should("have.length" , 5)

//for checking the inputs is right or not , we should use this type of assertion , we need to use have.value in that

// cy.get("[name=username]").type("Admin")
// cy.get("[name=username]").should("have.value","Admin")
// cy.get("[name=username]").should("not.value","Amin")

//Explicit assertion

//under explicit assertion , we have bdd-expect and tdd -assert

// describe("Assertions" , () =>{
//     it("explicit assertion", () => {
//     cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
//     cy.get("[name=username]").type("Admin")
//     cy.get("[name=password]").type("admin123").click()
//     cy.get("button[type='submit']").click()
    
//     let expName = "Sai Ram Gummaluri";
//     cy.get(".oxd-userdropdown-name").then ( (x) =>{
        
//         //Bdd assertion


//         let actName= x.text()
//         expect(actName).to.equal(expName)

//         //tdd assertion

//         assert.equal(actName,expName)
//         assert.notEqual(actName,expName)
//     })

// })
// })