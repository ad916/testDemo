const Home = require('../pages/home');
const AddComputer = require('../pages/addComputer')

context('Find computer', () => {

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
    })

    it('should be able to find newly added computer', () => {
        home.filterByCompName(computerName)
        home.verifySearchResult(computerName,introDate,disCntDate,companyName)
    })
})
