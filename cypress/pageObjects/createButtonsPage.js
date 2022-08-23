import BasePage from "./basePage";

class CreateButtonsPage extends BasePage {
  static get url() {
    return "/buttons";
  }


static get doubleClickButton(){
    return cy.get("[id='doubleClickBtn']");
}


static get doubleClickMessage(){
    return cy.get("[id='doubleClickMessage']");
}

static get rightClickButton(){
    return cy.get("[id='rightClickBtn']");
}


static get rightClickMessage(){
    return cy.get("[id='rightClickMessage']");
}
  

static get clickMeButton(){
    return cy.get(".mt-4:nth-child(3)>button");
}


static get clickMeMessage(){
    return cy.get("[id='dynamicClickMessage']");
}


}
export default CreateButtonsPage;