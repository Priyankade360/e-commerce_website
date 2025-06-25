import { AppProvider } from "./Context/ProductContext.jsx";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { FilterContextProvider } from "./Context/filter_context.jsx";


createRoot(document.getElementById("root")).render(
  <AppProvider>
    <FilterContextProvider>
        <App />
    </FilterContextProvider>
  
  </AppProvider>
);
