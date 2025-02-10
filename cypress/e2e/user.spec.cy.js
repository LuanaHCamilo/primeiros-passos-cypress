import userData from '../fixtures/users/userData.json'
import loginPage from '../pages/loginPage' 
import dashboardPage from '../pages/dashboardPage' 

const loginPage = new loginPage()
const dashboardPage = new dashboardPage()

describe('Orange HRM Tests', () => {

  const selectorsList = {

    firstNameField: "[name='firstName']",
    lastNameField: "[name='lastName']",
    genericField: ".oxd-input--active",
    dateField: "[placeholder='yyyy-dd-mm']",
    dateCloseButton: ".--close",
    submitButton: ".orangehrm-left-space"

  }

  it. only('User Info Update - Success', () => {
    loginPage.accessloginPage()
    loginPage.loginWithAnyUser (userData.userSuccess.username, userData.userSuccess.password)
 
    dashboardPage.checkDashboardPage()

    menuPage.accessMyInfo()

    cy.get(selectorsList.firstNameField).clear().type('FirstNameTest')
    cy.get(selectorsList.lastNameField).clear().type('LastNameTest')
    cy.get(selectorsList.genericField).eq(4).clear().type('EmployeeTest')
    cy.get(selectorsList.genericField).eq(5).clear().type('OtherIdTest')
    cy.get(selectorsList.genericField).eq(6).clear().type('DriversLicenseTest')
    cy.get(selectorsList.dateCloseButton).click()
    cy.get(selectorsList.submitButton).eq(1).click()
    cy.get('body').should('contain','Success');
    cy.get('.oxd-toast-close')
    
  })
  it('login - Fail', () => {
    
    cy.get(selectorsList.usernameField).type(userData.userFail.username)
    cy.get(selectorsList.passwordField).type(userData.userFail.password)
    cy.get(selectorsList.loginButton).click()
    cy.get(selectorsList.WrongCredentialAlert)
  })
})