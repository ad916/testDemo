const SELECTORS = require('../selectors/selectors');

class addComputer {
    constructor(browser) {
        this.goToAddComputer = function () {
            cy.get(SELECTORS.goToAddCompBtn).click()
        };

        this.fillAddCompData = function (computerName, introDate, disContDate,companyName) {
            cy.get(SELECTORS.compName).clear().type(computerName)
            cy.get(SELECTORS.introDate).clear().type(introDate)
            cy.get(SELECTORS.disContDate).clear().type(disContDate)
            cy.get(SELECTORS.companyName).select(companyName)
        };

        this.clickAddBtn = function(){
            cy.get(SELECTORS.submitAddComp).click()
        };

        this.verifyAddAlert = function(computerName){
            cy.get(SELECTORS.alertMsg).invoke("text").then((text)=>{
                expect(text.trim()).to.eq('Done! Computer '+ computerName +' has been created')
            })
        };
        this.verifyErrMessage = function(fieldName){
            cy.get(SELECTORS.errMsg).should('have.text',fieldName)

        }
    }
}

module.exports=addComputer;
