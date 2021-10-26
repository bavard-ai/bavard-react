import "@bavard/widget-loader";

export * from "./ChatbotWindowEmbed";
export * from "./ChatbotWindowPopup";

export const bavardClearStorage = (widgetId?: number) => {
  window.bavardClearStorage(widgetId);
};
