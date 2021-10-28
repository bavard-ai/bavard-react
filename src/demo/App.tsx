/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable jsx-a11y/label-has-associated-control */
// this comment tells babel to convert jsx to calls to a function called jsx instead of React.createElement
/** @jsx jsx */
import { css, jsx } from "@emotion/react";
import React, { useEffect, useState } from "react";
import { ChatbotWindowPopup, ChatbotWindowEmbed, bavardClearStorage } from "..";

function App() {
  const [dev, setDev] = useState(false);

  useEffect(() => {
    bavardClearStorage(0);
    bavardClearStorage(1);
  }, [dev]);

  return (
    <div>
      <div style={{ display: "flex", alignItems: "center" }}>
        <span>Dev:</span>
        <label
          css={css`
            position: relative;
            display: inline-block;
            width: 60px;
            height: 34px;

            input {
              opacity: 0;
              width: 0;
              height: 0;
            }

            input:checked + .slider {
              background-color: #2196f3;
            }
            input:checked + .slider:before {
              -webkit-transform: translateX(26px);
              -ms-transform: translateX(26px);
              transform: translateX(26px);
            }
            input:focus + .slider {
              box-shadow: 0 0 1px #2196f3;
            }
          `}
        >
          <input
            type="checkbox"
            checked={dev}
            onChange={(e) => {
              setDev(e.target.checked);
            }}
          />
          <span
            className="slider"
            css={css`
              position: absolute;
              cursor: pointer;
              top: 0;
              left: 0;
              right: 0;
              bottom: 0;
              background-color: #ccc;
              -webkit-transition: 0.4s;
              transition: 0.4s;

              border-radius: 34px;
              &:before {
                position: absolute;
                content: "";
                height: 26px;
                width: 26px;
                left: 4px;
                bottom: 4px;
                background-color: white;
                -webkit-transition: 0.4s;
                transition: 0.4s;
                border-radius: 50%;
              }
            `}
          />
          Dev
        </label>
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <ChatbotWindowPopup
          widgetId={0}
          agentId="b4d9de5e-2325-4244-98c4-1526643dd0da"
          demo
          dev={dev}
        />
        <ChatbotWindowEmbed
          agentId="b4d9de5e-2325-4244-98c4-1526643dd0da"
          widgetId={1}
          style={{ height: 600, width: 400 }}
          demo
          dev={dev}
        />
      </div>
    </div>
  );
}

export default App;
