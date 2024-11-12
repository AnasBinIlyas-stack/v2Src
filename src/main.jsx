import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./style/main.scss";
import "sweetalert2/src/sweetalert2.scss";
import { BrowserRouter } from "react-router-dom";
import { Toaster } from "react-hot-toast";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Toaster />
    <App />
  </BrowserRouter>
);
