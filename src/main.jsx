import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import Loader from "./components/Common/Loader.jsx";
import NavContext from "./context/NavContext.jsx";



createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Loader>
        <NavContext>
          <App />
        </NavContext>
      </Loader>
    </BrowserRouter>
  </StrictMode>
);
