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
  onLoaded,
}: BavardChatbotProps) => {
  useRenderBavardChatbotWidget({
    widgetSettings,
    agentId,
    dev,
    startOpen,
    type: "popup",
    debug,
    conversationId,
    onLoaded,
  });
  return null;
};
