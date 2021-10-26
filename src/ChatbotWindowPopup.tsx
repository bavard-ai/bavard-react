import { BotType } from "@bavard/widget-loader/types";
import {
  useRenderBavardChatbotWidget,
  IUseRenderChatbotWindowProps,
} from "./hooks/useRenderChatbotWindow";

type BavardChatbotProps = Omit<IUseRenderChatbotWindowProps, "skip">;

export const ChatbotWindowPopup = ({
  agentId,
  widgetId,
  dev,
  demo,
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
    widgetId,
    dev,
    demo,
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
