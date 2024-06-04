import React from "react";
import ReactDOM from "react-dom/client";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "react-loading-skeleton/dist/skeleton.css";

import App from "./App.tsx";
import { ReactQuery } from "./providers/react-query.tsx";
import { ReduxProvider } from "./providers/redux.tsx";
import "./styles/index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ReduxProvider>
      <ReactQuery>
        <App />
        <ToastContainer />
      </ReactQuery>
    </ReduxProvider>
  </React.StrictMode>
);
