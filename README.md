


# Bavard React Components


<div align="center">
<img src="bavard.svg" alt="Bavard Logo" height="100"/>

[![bavard-ai](https://circleci.com/gh/bavard-ai/bavard-react.svg?style=svg&circle-token=8b2c8a300381745b12f110b1a673d3267699cfa1))](https://circleci.com/gh/bavard-ai/bavard-react)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

</div>

A small set of React components for easily including Bavard chatbots within any React app.

# Setup 

### 1. Install the npm package.

```
npm i @bavard/bavard-react
```
### 2. Add the Bavard script tag to the `<head>` element of your HTML page.

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

# Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/bavard/bavard-ai/tags). 

# Authors

See also the list of [contributors](https://github.com/bavard/bavard-react/contributors) who participated in this project.

# License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
