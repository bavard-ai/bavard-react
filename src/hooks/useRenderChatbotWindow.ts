import { IWidgetSettings } from "@bavard/agent-config";
import { useCallback, useEffect } from "react";
import { useCounterState } from "react-use-object-state";
import { useDebounce } from "use-debounce";
import "@bavard/widget-loader";
import { BotType } from "@bavard/widget-loader/types";
import { updateWidgetSettings } from "../utils";

export interface IUseRenderChatbotWindowProps {
  /**
   * The UUID of the chatbot.
   */
  agentId: string;
  /**
   * A positive integer (1,2,3,...) specifying an id for the chat-window if multiple windows are using in the same page or app.
   */
  widgetId?: number;
  /**
   * A flag indicating whether the window will communicate with the draft version or the live published version of the chatbot.
   */
  dev?: boolean;
  /**
   * True if this is a demo conversation. Demo conversations are not included for analytics reporting.
   */
  demo?: boolean;
  debug?: boolean;
  conversationId?: string | null;
  widgetSettings?: IWidgetSettings;
  startOpen?: boolean;
  type?: BotType;
  widgetBaseUrl?: string;
  /**
   * If true, this causes the include/exclude paths in widgetSettings to be ignored.
   */
  ignorePaths?: boolean;
  onLoaded?: (loading: boolean, delay: number) => void;
}

export const useRenderBavardChatbotWidget = ({
  onLoaded,
  ...props
}: IUseRenderChatbotWindowProps) => {
  // helps prevent frequent rerenders
  const {
    agentId,
    widgetId,
    dev,
    demo,
    debug,
    startOpen,
    type,
    ignorePaths,
    widgetBaseUrl,
  } = JSON.parse(
    useDebounce(JSON.stringify(props), 1000, {
      leading: true,
      trailing: false,
    })[0]
  ) as typeof props;

  // stringify for dependency array comparison
  const stringifiedWidgetSettings = props.widgetSettings
    ? JSON.stringify(props.widgetSettings)
    : null;

  const forceUpdate = useCounterState();

  const unloadWidget = useCallback(() => {
    window.unloadBavard?.(widgetId, false);
  }, [widgetId]);

  const loadWidget = useCallback(() => {
    unloadWidget();
    window.loadBavard({
      agentId,
      widgetId,
      debug,
      dev,
      demo,
      startOpen,
      widgetBaseUrl,
      widgetSettings: props.widgetSettings,
      type,
      ignorePaths,
    });

    onLoaded?.(false, 1000);
    // Don't include widgetSettings in dependency array or it will cause a reload every time they change.
    // Updates to the widgetSettings are handled in a separate useEffect below.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    unloadWidget,
    agentId,
    widgetId,
    debug,
    dev,
    demo,
    startOpen,
    widgetBaseUrl,
    type,
    ignorePaths,
    onLoaded,
  ]);

  // Handle widget settings updates.
  useEffect(() => {
    if (stringifiedWidgetSettings) {
      updateWidgetSettings(JSON.parse(stringifiedWidgetSettings), widgetId);
    }
  }, [stringifiedWidgetSettings, widgetId]);

  useEffect(() => {
    loadWidget();
    // cleanup, remove chatbot from dom
    return () => {
      unloadWidget();
    };
  }, [unloadWidget, loadWidget, forceUpdate.count]);

  return {
    reload: forceUpdate.increment,
  };
};
