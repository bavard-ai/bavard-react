import { BotType } from "@bavard/widget-loader/types";
import {
  useRenderBavardChatbotWidget,
  IUseRenderChatbotWindowProps,
} from "./hooks/useRenderChatbotWindow";

type BavardChatbotProps = Omit<
  IUseRenderChatbotWindowProps,
  "skip" | "widgetId"
>;

export const ChatbotWindowPopup = ({
  agentId,
  dev,
  debug,
  conversationId,
  widgetSettings,
  startOpen = false,
  widgetBaseUrl,
  ignorePaths,
  onLoaded,
}: BavardChatbotProps) => {
  useRenderBavardChatbotWidget({
    widgetSettings,
    agentId,
    dev,
    startOpen,
    type: BotType.POPUP,
    debug,
    conversationId,
    widgetBaseUrl,
    ignorePaths,
    onLoaded,
  });
  return null;
};
