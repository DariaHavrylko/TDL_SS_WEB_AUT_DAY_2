import BasePage from "./basePage";

class RadioButtonsPage extends BasePage {
  static get url() {
    return "/radio-button";
  }

  static get yesButton() {
    return cy.get("[for='yesRadio']");
  }

  static get validateTheMessage(){
    return cy.get("[class='mt-3']");
}
static get impressiveButton(){
    return cy.get("[for='impressiveRadio']");
}

static get noButton(){
    return cy.get("[id='noRadio']");
}
  
}


export default RadioButtonsPage;