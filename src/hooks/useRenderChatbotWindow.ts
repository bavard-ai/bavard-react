import { IWidgetSettings } from "@bavard/agent-config";
import { useCallback, useEffect } from "react";
import { useCounterState } from "react-use-object-state";
import { useDebounce } from "use-debounce";

export interface IUseRenderChatbotWindowProps {
  agentId: string;
  widgetId?: number;
  dev?: boolean;
  debug?: boolean;
  conversationId?: string | null;
  widgetSettings?: IWidgetSettings | null;
  startOpen?: boolean;
  type?: "popup" | "embed";
  onLoaded?: (loading: boolean, delay: number) => void;
}

export const useRenderBavardChatbotWidget = ({
  onLoaded,
  ...widgetProps
}: IUseRenderChatbotWindowProps) => {
  // helps prevent frequent rerenders
  const {
    agentId,
    widgetId,
    dev,
    debug,
    conversationId,
    widgetSettings,
    startOpen,
    type,
  } = JSON.parse(
    useDebounce(JSON.stringify(widgetProps), 1000)[0]
  ) as typeof widgetProps;
  // stringify for dependency array comparison, also for widgetSettings
  // parameters in loadBavard script
  const stringifiedWidgetSettings = widgetSettings
    ? JSON.stringify(widgetSettings)
    : null;

  const forceUpdate = useCounterState();

  const unloadWidget = useCallback(() => {
    (
      window as unknown as Window & {
        unloadBavard?: (widgetId?: number) => void;
      }
    ).unloadBavard?.(widgetId || 0);
  }, [widgetId]);

  const loadWidget = useCallback(() => {
    unloadWidget();

    (
      window as unknown as Window & { loadBavard: (params: Object) => void }
    ).loadBavard({
      agentId,
      widgetId,
      debug,
      dev,
      startOpen,
      conversationId,
      widgetSettings:
        stringifiedWidgetSettings && JSON.parse(stringifiedWidgetSettings),
      type,
    });
    onLoaded?.(false, 1000);
  }, [
    unloadWidget,
    agentId,
    widgetId,
    debug,
    dev,
    startOpen,
    conversationId,
    stringifiedWidgetSettings,
    type,
    onLoaded,
  ]);

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
