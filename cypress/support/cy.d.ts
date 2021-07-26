declare namespace Cypress {
  interface Chainable {
    getChatbotIframeDocument(): Chainable<Element>;
    getChatbotIframeBody(): Chainable<Element>;
    getWidgetTriggerButton(): Chainable<Element>;
    getMainBodyCloseButton(): Chainable<Element>;
    getChatWindow(): Chainable<Element>;
    getPopupMessageBox(): Chainable<Element>;
    getPoupMessageDismissButton(): Chainable<Element>;
    getBadgeNotification(): Chainable<Element>;
    getWidgetHeader(): Chainable<Element>;
    getWidgetLogo(): Chainable<Element>;
    getWidgetGreeting(): Chainable<Element>;
    getMessageArea(): Chainable<Element>;
    getInputArea(): Chainable<Element>;
    getMessageInputForm(): Chainable<Element>;
    getBranding(): Chainable<Element>;

    shoulShowChatMainBody(): void;
    shouldContainText(text: string): void;
    shouldShowCyElement(id: string): void;
    shouldTypeCyElement(id: string, content: string): void;
    shouldClickCyElement(id: string, force: boolean): void;

    clickWidgetTriggerButton(force?: boolean): void;
    clickChatBodyCloseButton(): void;
    openChatMainBody(): void;
    getCyElement(label: string): Chainable<Element>;
  }
}
