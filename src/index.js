import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { ConfigProvider } from "antd";
import enUS from "antd/lib/locale-provider/en_US";
import App from "./App";

ReactDOM.render(
  <BrowserRouter>
    <ConfigProvider locale={enUS}>
      <App />
    </ConfigProvider>
  </BrowserRouter>,
  document.getElementById("root")
);
