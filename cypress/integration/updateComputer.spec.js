const Home = require('../pages/home');
const AddComputer = require('../pages/addComputer')

context('Update computer', () => {

    const home = new Home()
    const addComputer = new AddComputer() 
    let computerName = 'Mac-' + new Date().toISOString()
    let introDate = '2016-09-10'
    let disCntDate = '2017-01-11'
    let companyName = 'IBM' 
  
    before(() => {
        cy.visit('/')
        home.goToAddComp();
        addComputer.fillAddCompData(computerName,introDate,disCntDate,companyName)
        addComputer.clickAddBtn()
        addComputer.verifyAddAlert(computerName)
        home.filterByCompName(computerName)
        home.verifySearchResult(computerName,introDate,disCntDate,companyName)        
    })

    it('should be able to update computer record', () => {
        computerName = computerName + '-updated'
        introDate = '2017-09-10'
        disCntDate = '2018-01-11'
        companyName = 'Apple Inc.' 
        addComputer.fillAddCompData(computerName,introDate,disCntDate,companyName)
        addComputer.clickAddBtn()
        home.filterByCompName(computerName)
        home.verifySearchResult(computerName,introDate,disCntDate,companyName)        
    })
})
