import React, { useEffect } from "react";
import { ChatbotWindowPopup, ChatbotWindowEmbed, bavardClearStorage } from "..";

function App() {
  useEffect(() => {
    bavardClearStorage(0);
    bavardClearStorage(1);
  }, []);

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <ChatbotWindowPopup
        widgetId={0}
        agentId="b4d9de5e-2325-4244-98c4-1526643dd0da"
        demo
      />
      <ChatbotWindowEmbed
        agentId="b4d9de5e-2325-4244-98c4-1526643dd0da"
        widgetId={1}
        style={{ height: 600, width: 400 }}
        demo
      />
    </div>
  );
}

export default App;
