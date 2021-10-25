import React from "react";
import { ChatbotWindowPopup } from "../ChatbotWindowPopup";
import { ChatbotWindowEmbed } from "../ChatbotWindowEmbed";

function App() {
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <ChatbotWindowPopup agentId="b4d9de5e-2325-4244-98c4-1526643dd0da" demo />
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
