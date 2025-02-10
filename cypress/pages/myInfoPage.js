class MyInfoPage {

    selectorsList () {
        const selectors = {
            firstNameField: "[name='firstName']",
            lastNameField: "[name='lastName']",
            genericField: ".oxd-input--active",
            dateField: "[placeholder='yyyy-dd-mm']",
            dateCloseButton: ".--close",
            submitButton: ".orangehrm-left-space"
        }

        return selectors
    }

    fillPersonalDetails(firstName, lastName) {
    cy.get(this.selectorsList().firstNameField).clear().type(firstName)
    cy.get(this.selectorsList().lastNameField).clear().type(lastName)
    }
    
    fillEmployeeDetails(employeeId, OtherId, driversLicenseDate) {
    cy.get(this.selectorsList().genericField).eq(4).clear().type(employeeId)
    cy.get(this.selectorsList().genericField).eq(5).clear().type(OtherId)
    cy.get(this.selectorsList().genericField).eq(6).clear().type(driversLicenseDate)
    cy.get(this.selectorsList().dateCloseButton).click()    
    }

    saveForm() {
        cy.get(this.selectorsList().submitButton).eq(1).click({ force: true})
        cy.get('body').should('contain', 'Success');
        cy.get('.oxd-toast-close')
    }

    
}

export default MyInfoPage