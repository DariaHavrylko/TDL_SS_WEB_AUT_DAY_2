import TextBoxPage from "../../pageObjects/textBoxPage";
import CheckBoxPage from "../../pageObjects/checkBoxPage";
import RadioButtonsPage from "../../pageObjects/radioButtonsPage";
import WebTablesPage from "../../pageObjects/webTablesPage";
import CreateButtonsPage from "../../pageObjects/createButtonsPage";

context("Elements Page", () => {
  context("Text box scenarios", () => {
    beforeEach(() => {
      TextBoxPage.visit();
    });
    // Create texbox scenario
    // fill in textboxes with necessary information
    // validate the paragraphs
    it("Filling in Text Boxes", () => {
      TextBoxPage.fillUserNameField.click();
      TextBoxPage.fillUserNameField.type("User Name");
      TextBoxPage.fillEmailField.click();
      TextBoxPage.fillEmailField.type("UserEmail@gmail.com");
      TextBoxPage.fillCurremtAddressField.click();
      TextBoxPage.fillCurremtAddressField.type("CurrentAddress");
      TextBoxPage.fillPermanentAddressField.click();
      TextBoxPage.fillPermanentAddressField.type("PermanentAddress");
      TextBoxPage.submitButton.click();
      TextBoxPage.validNameField.should("contain.text", "User Name");
      TextBoxPage.validEmailField.should("contain.text", "UserEmail@gmail.com");
      TextBoxPage.validCurrentAddressField.should("contain.text", "CurrentAddress");
      TextBoxPage.validPermanentAddressField.should("contain.text", "PermanentAddress");
    });
  });

  context("Check box scenarios", () => {
     // Create CheckBoxPage page object 
    beforeEach(() => {
      CheckBoxPage.visit();
    });
    // Create checkbox scenario 1:
    // Click the "+"/expand button
    // Click Notes, React, Angular, General, Excel File.doc +
    // Validate the clicked checkboxes
    it("Check box scenarios: Scenario 1 ", () => {
      CheckBoxPage.PlusButton.click();
      CheckBoxPage.NotesButton.click();
      CheckBoxPage.ReactButton.click();
      CheckBoxPage.AngularButton.click();
      CheckBoxPage.GeneralButton.click();
      CheckBoxPage.ExcelButton.click();
      CheckBoxPage.Validate.should("contain.text", "notes");
      CheckBoxPage.Validate.should("contain.text", "react");
      CheckBoxPage.Validate.should("contain.text", "angular");
      CheckBoxPage.Validate.should("contain.text", "general");
      CheckBoxPage.Validate.should("contain.text", "excelFile");
    });

    it("Check box scenarios: Scenario 2 ", () => {
    // Create checkbox scenario 2:
    // Click expand button
    // Click Office
    // Validate the checked checkboxes
      CheckBoxPage.PlusButton.click();
      CheckBoxPage.OfficeButton.click();
      CheckBoxPage.Validate.should("contain.text", "office")
    });
  });

  context("Radio button scenarios", () => {
    beforeEach(() => {
      RadioButtonsPage.visit();
    });
    // Create RadioButtons page object
    // Scenario 1:
    // Click yesButton
    // validate the message
    // click impressiveButton
    // validate the message
    // noButton - validate that the button exists but is disabled
    it("Radio button scenarios: Scenario 1 ", () => {
      RadioButtonsPage.yesButton.click();
      RadioButtonsPage.validateTheMessage.should("contain.text", "Yes");
      RadioButtonsPage.impressiveButton.click();
      RadioButtonsPage.validateTheMessage.should("contain.text", "Impressive");
      RadioButtonsPage.noButton.should("be.disabled")
    });
  });

  context("Web tables scenarios", () => {
    beforeEach(() => {
      WebTablesPage.visit();
    });
    // Create WebTables page object
    // Create scenario 1:
    // Click add record button
    // fill in the necessary information
    // click submit button
    // search for the user based on previously added information
    // validate tha the user is visible
    it("Web tables scenarios: Scenario 1 ", () => {
      WebTablesPage.addButton.click();
      WebTablesPage.firstNameField.type("User First Name");
      WebTablesPage.lastNameField.type("User Last Name");
      WebTablesPage.emailField.type("UserEmail@gmail.com");
      WebTablesPage.ageField.type("20");
      WebTablesPage.salaryField.type("2000");
      WebTablesPage.departmentField.type("User Department");
      WebTablesPage.submitButton.click();
      WebTablesPage.searchInfo.type("User First Name");
      WebTablesPage.validateName.contains("User First Name").and('be.visible') ;
    });

    it.only("Web tables scenarios: Scenario 2 ", () => {
    // Create Scenario 2:
    // Delete all table rows
    // Validate that we see text - No rows found .rt-noData
    //WebTablesPage.rows.should("have.length", 0);
    //WebTablesPage.validateNoData.should()
    });
  });

  context("Buttons scenarios", () => {
    beforeEach(() => {
      CreateButtonsPage.visit();
    });

    it("Buttons scenarios: Scenario 1 ", () => {
     CreateButtonsPage.doubleClickButton.dblclick();
     CreateButtonsPage.doubleClickMessage.should("contain.text", "You have done a double click");
     CreateButtonsPage.rightClickButton.rightclick();
     CreateButtonsPage.rightClickMessage.should("contain.text", "You have done a right click");
     CreateButtonsPage.clickMeButton.click();
     CreateButtonsPage.clickMeMessage.should("contain.text", "You have done a dynamic click");
    });
    // Create buttons clicking scenario
    // Create Buttons page
    // Check documentation https://docs.cypress.io/api/commands/and for how to perform different types of clicking
    // Click Double click button
    // Validate the double click message
    // Click rightclick button
    // Validate the right click message
    // Do dynamic click
    // Validate dynamic click message
  });
});
