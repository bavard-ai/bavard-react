describe("PopupMessageBox Updates 2", () => {
  describe("should be able to hide PopupMessageBox by clicking dismissButton", () => {
    it("should show popupMessageBox and dismissButton", () => {
      cy.window().then((win) => {
        win.sessionStorage.clear();
      });
      cy.visit("/");
      cy.wait(3000);
      cy.getPopupMessageBox().should("be.visible");
      cy.getPoupMessageDismissButton().should("be.visible");
    });

    it("should hide the popupMessageBox by clicking dismissButton", () => {
      cy.getPoupMessageDismissButton().click();
      cy.getPopupMessageBox().should("not.exist");
    });
  });
});
