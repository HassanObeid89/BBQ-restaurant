// NPM Packages
import { createContext, useContext, useReducer } from "react";

// Proeject files
import categoriesReducer from "./categoriesReducer";


// Properties
const CategoryContext = createContext(null);

export function CategoryProvider({ children }) {
  // Local state
  const [categories, dispatch] = useReducer(categoriesReducer, []);
  

  return (
    <CategoryContext.Provider
      value={{ categories, dispatch }}
    >
      {children}
    </CategoryContext.Provider>
  );
}

export function useCategory() {
  const context = useContext(CategoryContext);

  return context;
}