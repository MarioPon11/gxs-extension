import React from "react";
import ReactDOM from "react-dom/client";
import { initBolt } from "../lib/utils/bolt";
import { defaultTheme, Provider } from '@adobe/react-spectrum';
import "./index.css";


import Main from "./main";

initBolt();

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Provider theme={defaultTheme} UNSAFE_className="h-full w-full">
      <Main />
    </Provider>
  </React.StrictMode>
);
