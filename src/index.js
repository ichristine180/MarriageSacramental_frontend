import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { I18nextProvider } from "react-i18next";
import "bootstrap/dist/css/bootstrap.css";
import "./assets/styles/main.css";
import "./assets/styles/mobile.css";
import "./assets/styles/tablet.css";
import App from "./components/App";

import { store } from "./app/store";
import i18n from "./translations/i18n";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <I18nextProvider i18n={i18n}>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </I18nextProvider>
);
