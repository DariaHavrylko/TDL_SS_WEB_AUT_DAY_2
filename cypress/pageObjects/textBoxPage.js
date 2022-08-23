import BasePage from "./basePage";

class TextBoxPage extends BasePage {
  static get url() {
    return "/text-box";
  }

  static get fillUserNameField() {
    return cy.get("#userName");
  }


  static get fillEmailField() {
    return cy.get("#userEmail");
  }

  static get fillCurremtAddressField() {
    return cy.get("#currentAddress");
  }

  static get fillPermanentAddressField() {
    return cy.get("#permanentAddress");
  }
  
  static get submitButton() {
    return cy.get("#submit");
  }

  static get validNameField() {
    return cy.get("#name");
  }
  
  static get validEmailField() {
    return cy.get("#email");
  }

  static get validCurrentAddressField() {
    return cy.get('p[id="currentAddress"]');
  }

  static get validPermanentAddressField() {
    return cy.get('p[id="permanentAddress"]');
  }
}
export default TextBoxPage;
