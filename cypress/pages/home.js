const SELECTORS = require('../selectors/selectors');

class homePage {
    constructor(browser) {
        this.goToAddComp = function () {
            cy.get("body").then($body => {
                if (!$body.find(SELECTORS.searchBox).length > 0) {   
                    cy.get(SELECTORS.home).click()
                }
            });
            cy.get(SELECTORS.goToAddCompBtn).click()
        };

        this.filterByCompName = function (computerName) {
            cy.get(SELECTORS.searchBox).type(computerName)
            cy.get(SELECTORS.searchsubmit).click()
        };
        
        this.verifySearchResult= function(computerName,introDate,disContDate,companyName){
            cy.contains(computerName).click()
            cy.get(SELECTORS.compName).should('have.value', computerName)
            cy.get(SELECTORS.introDate).should('have.value', introDate)
            cy.get(SELECTORS.disContDate).should('have.value', disContDate)  
            cy.get('select#company option:selected').should('have.text', companyName)   
        };
        this.deleteComputer = function(){
            cy.get(SELECTORS.deleteComputer).click()
        };
        this.verifyNoSearchResults = function(){
            cy.get(SELECTORS.noDataMsg).invoke("text").then((text)=>{
                expect(text.trim()).to.eq('Nothing to display')
            })
        }
    }
}

module.exports=homePage;
