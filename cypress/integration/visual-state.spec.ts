describe("VisualState Updates", () => {
  describe("should be able to toggle chatMainBody by clicking widgetTriggerButton", () => {
    it("should show should the chatMainBody by clicking widgetTriggerButton", () => {
      cy.visit("/");
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
      cy.visit("/");
      cy.openChatMainBody();
      cy.shoulShowChatMainBody();
    });

    it("should hide the chatMainBody once user clicks the closeButton", () => {
      cy.clickChatBodyCloseButton();
      cy.getChatWindow().should("be.hidden");
    });
  });
});
