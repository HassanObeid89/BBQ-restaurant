// NPM Packages
import { createContext, useContext, useReducer } from "react";

// Proeject files
import productReducer from "./productReducer";

// Properties
const ProductContext = createContext(null);

export function ProductProvider({ children }) {
  // Local state
  const [products, dispatchProducts] = useReducer(productReducer, []);

  return (
    <ProductContext.Provider value={{ products, dispatchProducts }}>
      {children}
    </ProductContext.Provider>
  );
}

export function useProduct() {
  const context = useContext(ProductContext);

  return context;
}
