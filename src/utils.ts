import { IWidgetSettings } from "@bavard/agent-config";

export const bavardClearStorage = (widgetId?: number) => {
  window.bavardClearStorage(widgetId);
};

export const updateWidgetSettings = (
  settings: IWidgetSettings,
  widgetId?: number
) => {
  window.bavardSetWidgetSettings(settings, widgetId);
};
