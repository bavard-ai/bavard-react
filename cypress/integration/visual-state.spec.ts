describe("VisualState Updates", () => {
  describe("should be able to toggle chatMainBody by clicking widgetTriggerButton", () => {
    it("should show should the chatMainBody by clicking widgetTriggerButton", () => {
      cy.window().then((win) => {
        win.sessionStorage.clear();
      });
      cy.visit("/");
      cy.wait(2000);
      cy.getBadgeNotification().should("be.visible");
      cy.openChatMainBody();
      cy.shoulShowChatMainBody();
    });

    it("should hide the chatMainBody once user clicks the widgetTriggerButton again", () => {
      cy.clickWidgetTriggerButton(true);
      cy.getChatWindow().should("be.hidden");
    });
  });

  describe("should be able to close chatMainBody by clicking closeButton", () => {
    it("should show should the chatMainBody by clicking widgetTriggerButton", () => {
      cy.window().then((win) => {
        win.sessionStorage.clear();
      });
      cy.visit("/");
      cy.wait(2000);
      cy.openChatMainBody();
      cy.shoulShowChatMainBody();
    });

    it("should hide the chatMainBody once user clicks the closeButton", () => {
      cy.clickChatBodyCloseButton();
      cy.getChatWindow().should("be.hidden");
    });
  });
});
