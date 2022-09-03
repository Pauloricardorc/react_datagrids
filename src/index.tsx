import React from "react";
import ReactDOM from "react-dom/client";
import { Router } from "./router";
import reportWebVitals from "./reportWebVitals";
import localept from "./core/locale/pt.json";

import "primereact/resources/themes/md-light-indigo/theme.css"; //theme
import "primereact/resources/primereact.min.css"; //core css
import "primeicons/primeicons.css"; //icons
import "/node_modules/primeflex/primeflex.css";
import { GlobalStyles } from "./styles/globalStyles";
import { addLocale, locale } from "primereact/api";
import { GridProvider } from "./pages/gridReactPrime/contexts/gridContext";

addLocale("pt", localept);
locale("pt");

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <GridProvider>
      <GlobalStyles />
      <Router />
    </GridProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
