import BasePage from "./basePage";

class CheckBoxPage extends BasePage {

  static get url() {
    return "/checkbox";
  }

  static get PlusButton() {
    return cy.get("[class = 'rct-option rct-option-expand-all']");
  }

  static get NotesButton() {
    return cy.get("[for='tree-node-notes']");
  }


  static get ReactButton() {
    return cy.get("[for='tree-node-react']");
  }


  static get AngularButton() {
    return cy.get("[for='tree-node-angular']");
  }


  static get GeneralButton() {
    return cy.get("[for='tree-node-general']");
  }

  static get ExcelButton(){
    return cy.get("[for='tree-node-excelFile']");
}

  static get Validate() {
    return cy.get("[class='display-result mt-4']");
  }

  static get OfficeButton() {
    return cy.get("[for='tree-node-office']");
}

}

export default CheckBoxPage;