const Home = require('../pages/home');
const AddComputer = require('../pages/addComputer')

context('Add computer', () => {

    const home = new Home()
    const addComputer = new AddComputer() 
  
    before(() => {
        cy.visit('/')
    })

    it('should be able to add a new computer', () => {
        home.goToAddComp();
        addComputer.fillAddCompData('Mac','2012-11-11','2015-10-10','Apple Inc.')
        addComputer.clickAddBtn()
        addComputer.verifyAddAlert('Mac')
    })

    it('should be able to see error when introDate is greater then discont date', () => {
        home.goToAddComp();
        addComputer.fillAddCompData('Mac','2012-11-11','2011-10-10','Apple Inc.')
        addComputer.clickAddBtn()
        //some error 
    })

    it('should be able to see error when introduced date is illegal', () => {
        home.goToAddComp();
        addComputer.fillAddCompData('Mac','2012-14-11','2011-10-10','Apple Inc.')
        addComputer.clickAddBtn()
        addComputer.verifyErrMessage('Introduced date')
    })

    it('should be able to see error when discontinued date is illegal', () => {
        home.goToAddComp();
        addComputer.fillAddCompData('Mac','2012-11-11','2011-20-10','Apple Inc.')
        addComputer.clickAddBtn()
        addComputer.verifyErrMessage('Discontinued date')
    })
})
