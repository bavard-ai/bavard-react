describe("PopupMessageBox Updates 1", () => {
  describe("should be able to open chatMainBody by clicking the popupMessageBox", () => {
    it("should show the popupMessageBox at the initial render", () => {
      cy.visit("/");
      cy.getPopupMessageBox().should("be.visible");
      cy.getPoupMessageDismissButton().should("be.visible");
    });

    it("should show the chatMainBody by clicking popupMessageBox", () => {
      cy.getPopupMessageBox().click();
      cy.getChatWindow().should("be.visible");
      cy.shoulShowChatMainBody();
    });
  });
});
