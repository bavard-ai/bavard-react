# Bavard React Components

A small set of React components for easily including Bavard chatbots in your React app.

# Setup 

### 1. Install the npm package.

```
npm i @bavard/bavard-react
```
### 2. Add the Bavard script tag to `<head>` element of your HTML page.

```html
    <script src="https://bavard-widget-prod.web.app/main.bundle.js"></script>
```

### 3. Import and use the Bavard React components in your app. For example:
```tsx
import React from "react";
import { ChatbotWindowPopup } from "@bavard/bavard-react/ChatbotWindowPopup";
import { ChatbotWindowEmbed } from "@bavard/bavard-react/ChatbotWindowEmbed";

function App() {
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <ChatbotWindowPopup agentId="b4d9de5e-2325-4244-98c4-1526643dd0da" />
      <ChatbotWindowEmbed
        agentId="b4d9de5e-2325-4244-98c4-1526643dd0da"
        widgetId={1}
        style={{ height: 600, width: 400 }}
      />
    </div>
  );
}

export default App;
```