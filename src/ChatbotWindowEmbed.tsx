import { BotType } from "@bavard/widget-loader/types";
import {
  useRenderBavardChatbotWidget,
  IUseRenderChatbotWindowProps,
} from "./hooks/useRenderChatbotWindow";

interface ChatbotWindowEmbedProps
  extends Omit<IUseRenderChatbotWindowProps, "type" | "startOpen"> {
  width?: number;
  height?: number;
  style?: React.CSSProperties;
}

export const ChatbotWindowEmbed = ({
  agentId,
  widgetId,
  dev,
  debug,
  widgetSettings,
  width = 400,
  height = 600,
  style,
  widgetBaseUrl,
  onLoaded,
}: ChatbotWindowEmbedProps) => {
  useRenderBavardChatbotWidget({
    agentId,
    widgetId,
    dev,
    debug,
    widgetSettings,
    type: BotType.EMBED,
    widgetBaseUrl,
    onLoaded,
  });

  return (
    <div
      id={`bavard-widget-container${widgetId || ""}`}
      style={{ width, height, ...style }}
    />
  );
};
