import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { CategoryProvider } from "./utils/categoryProvider";

import ProductProvider from "./utils/ProductProvider";

ReactDOM.render(
  <ProductProvider>
    <CategoryProvider>
    <App />
    </CategoryProvider>
  </ProductProvider>,
  document.getElementById("root")
);
