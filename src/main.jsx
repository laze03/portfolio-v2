import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

//translation tools imports
import translationSetup from "./translation/translationSetup.js";
import { I18nextProvider } from "react-i18next";
import i18next from "i18next";

//translation setup
i18next.init({
  interpolation: { escapeValue: false }, // React already does escaping
  lng: translationSetup.language, // language to use
  resources: translationSetup.resources,
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <I18nextProvider i18n={i18next}>
      <App />
    </I18nextProvider>
  </React.StrictMode>
);
