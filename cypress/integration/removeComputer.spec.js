const Home = require('../pages/home');
const AddComputer = require('../pages/addComputer')

context('Remove computer', () => {

    const home = new Home()
    const addComputer = new AddComputer() 
    const computerName = 'Mac-' + new Date().toISOString()
    const introDate = '2016-09-10'
    const disCntDate = '2017-01-11'
    const companyName = 'IBM' 
  
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
        home.deleteComputer()
        home.filterByCompName(computerName)
        home.verifyNoSearchResults()      
    })
})
