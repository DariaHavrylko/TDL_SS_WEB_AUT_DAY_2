import BasePage from "./basePage";

class WebTablesPage extends BasePage {
  static get url() {
    return "/webtables";
  }
static get addButton(){
    return cy.get("[id='addNewRecordButton']");
} 
static get firstNameField() {
    return cy.get("[id='firstName']");
  }
static get lastNameField() {
    return cy.get("[id='lastName']");
  }
static get emailField() {
    return cy.get("[id='userEmail']");
  }

static get ageField() {
    return cy.get("[id='age']");
  }

static get salaryField() {
    return cy.get("[id='salary']");
}

static get departmentField() {
    return cy.get("[id='department']");
}


static get submitButton() {
    return cy.get("[id='submit']");
}

static get searchInfo() {
    return cy.get("[id='searchBox']");
}
static get validateName() {
    return cy.get("[class='rt-td']");
}

// static deleteRows(user) {
//   return this.rows
//     .contains(user)
//     .parent()
//     .find("[class='ReactTable -striped -highlight']")
//     .click();
// }

// static get validateNoData() {
//   return cy.get(".rt-noData");
// }





}
export default WebTablesPage;