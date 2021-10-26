import { IWidgetSettings } from "@bavard/agent-config";
import "@bavard/widget-loader";

export * from "./ChatbotWindowEmbed";
export * from "./ChatbotWindowPopup";

export const bavardClearStorage = (widgetId?: number) => {
  window.bavardClearStorage(widgetId);
};

export const updateWidgetSettings = (
  settings: IWidgetSettings,
  widgetId?: number
) => {
  window.bavardSetWidgetSettings(settings, widgetId);
};
