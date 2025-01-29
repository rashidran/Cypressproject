// describe('my test suite',()=>{

// //direct access
// it('fixturedemotest',()=>{
// cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewEmployeeList');
// cy.fixture('Datadriventestingusingjsondata.json').then((data)=>{
//     cy.get("[placeholder='Username']").type(data.username);
//     cy.get("[placeholder='Password']").type(data.password);
//     cy.get("[type='submit']").click();
//     cy.get('.oxd-topbar-header-breadcrumb > .oxd-text').should('contain.text' , 'data.expected')
// });

// });

// //access through hook-for multiple it blocks

// let userdata;
// before(()=>{
// cy.fixture('Datadriventestingusingjsondata.json').then((data)=>{
//     userdata = data;
// });
// });

// it('fixturedemotest',()=>{
    
//         cy.get("[placeholder='Username']").type(userdata.username);
//         cy.get("[placeholder='Password']").type(userdata.password);
//         cy.get("[type='submit']").click();
//         cy.get('.oxd-topbar-header-breadcrumb > .oxd-text').should('contain.text' , 'userdata.expected')
// });

// });


// describe('my test suite', ()=>{
//     it('datadriven test', ()=>{
// cy.fixture("Datadriventestingusingjsondata").then((data)=>{
//     cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewEmployeeList');
//         data.forEach((userdata)=>{
//         cy.get("[placeholder='Username']").type(userdata.username);
//         cy.get("[placeholder='Password']").type(userdata.password);
//         cy.get("[placeholder='Password']").type(userdata.password);
//         cy.get("[type='submit']").click();

//         if(userdata.username== "Admin" && userdata.password == "admin123")
//         {
//         cy.get('.oxd-topbar-header-breadcrumb > .oxd-text').should('contain.text' , 'userdata.expected');
//         }
//         else
//         {
//             cy.get('.oxd-topbar-header-breadcrumb > .oxd-text').should('contain.text' , 'userdata.expected');
//         }
//     });
// });
//     });
// });
