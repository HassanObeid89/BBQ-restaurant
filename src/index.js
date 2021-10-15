import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { CategoryProvider } from "./state/CategoryProvider";
import { ProductProvider } from "./state/ProductProvider";

ReactDOM.render(
  <ProductProvider>
    <CategoryProvider>
      <App />
    </CategoryProvider>
  </ProductProvider>,
  document.getElementById("root")
);
