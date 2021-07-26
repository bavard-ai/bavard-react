Cypress.Commands.add("getChatbotIframeDocument", () => {
  return cy
    .get('iframe[data-cy="bavard-iframe-popup"]')
    .its("0.contentDocument")
    .should("exist");
});

Cypress.Commands.add("getChatbotIframeBody", () => {
  return cy
    .getChatbotIframeDocument()
    .its("body")
    .should("not.be.undefined")
    .then(cy.wrap);
});

Cypress.Commands.add("getWidgetTriggerButton", () => {
  return cy.getChatbotIframeBody().find("#bavard-ai-widget-trigger");
});

Cypress.Commands.add("getMainBodyCloseButton", () => {
  return cy.getChatbotIframeBody().find(".close-button");
});

Cypress.Commands.add("getChatWindow", () => {
  return cy.getChatbotIframeBody().find("#chat-window");
});

Cypress.Commands.add("getPopupMessageBox", () => {
  return cy.getChatbotIframeBody().find("#message-popup");
});

Cypress.Commands.add("getPoupMessageDismissButton", () => {
  return cy.getChatbotIframeBody().find("#dismiss-button");
});

Cypress.Commands.add("getBadgeNotification", () => {
  return cy.getChatbotIframeBody().find(".badge-notification");
});

Cypress.Commands.add("getWidgetHeader", () => {
  return cy.getChatbotIframeBody().find(".widget-header");
});

Cypress.Commands.add("getWidgetLogo", () => {
  return cy.getChatbotIframeBody().find(".widget-logo");
});

Cypress.Commands.add("getWidgetGreeting", () => {
  return cy.getChatbotIframeBody().find(".greeting");
});

Cypress.Commands.add("getMessageArea", () => {
  return cy.getChatbotIframeBody().find(".message-area");
});

Cypress.Commands.add("getInputArea", () => {
  return cy.getChatbotIframeBody().find("#input-area");
});

Cypress.Commands.add("getMessageInputForm", () => {
  return cy.getChatbotIframeBody().find("#message-input-form");
});

Cypress.Commands.add("getBranding", () => {
  return cy.getChatbotIframeBody().find("#branding");
});

Cypress.Commands.add("shoulShowChatMainBody", () => {
  cy.getChatWindow().should("be.visible");
  cy.getWidgetHeader().should("be.visible");
  cy.getWidgetLogo().should("be.visible");
  cy.getWidgetGreeting().should("be.visible");
  cy.getMessageArea().should("be.visible");
  cy.getInputArea().should("be.visible");
  cy.getMessageInputForm().should("be.visible");
  cy.getBranding().should("be.visible");
});

Cypress.Commands.add("clickWidgetTriggerButton", (force = false) => {
  cy.getWidgetTriggerButton().click({ force });
});

Cypress.Commands.add("clickChatBodyCloseButton", () => {
  cy.getMainBodyCloseButton().click();
});

Cypress.Commands.add("openChatMainBody", () => {
  cy.visit("/");
  cy.getWidgetTriggerButton().should("be.visible");
  cy.clickWidgetTriggerButton();
  cy.getChatWindow().should("be.visible");
});

Cypress.Commands.add("getCyElement", (cyLabel) => {
  return cy.get(`[data-cy=${cyLabel}]`);
});

Cypress.Commands.add("shouldContainText", (text) => {
  cy.contains(text).scrollIntoView().should("be.visible");
});

Cypress.Commands.add("shouldShowCyElement", (id) => {
  const element = cy.getCyElement(id);
  element.scrollIntoView();
  element.should("be.visible");
});

Cypress.Commands.add("shouldTypeCyElement", (id, content) => {
  const element = cy.getCyElement(id);
  element.scrollIntoView();
  element.should("be.visible");
  element.type(content);
});

Cypress.Commands.add("shouldClickCyElement", (id, force = false) => {
  const element = cy.getCyElement(id);
  element.scrollIntoView();
  element.should("be.visible");
  element.click({ force });
});
