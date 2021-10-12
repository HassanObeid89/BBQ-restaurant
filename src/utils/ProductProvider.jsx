import {
  useContext,
  createContext,
  useState,
  useCallback,
  useEffect,
  useReducer,
} from "react";
import { getFirestore } from "firebase/firestore/lite";

import { getCollection } from "../scripts/fireStore";
import productReducer from "./productReducer";
import firebaseInstance from "../scripts/firebase";

const ProductContext = createContext(null);

export default function ProductProvider({ children }) {
  const [categories, dispatch] = useReducer(productReducer, []);
  const [status, setStatus] = useState(0);

  const database = getFirestore(firebaseInstance);
  const getCategories = useCallback(async () => {
    try {
      const categories = await getCollection(database, "categories");
      dispatch({ type: "SET_CATEGORIES", payload: categories });
      setStatus(1);
    } catch {
      setStatus(2);
    }
  }, [database]);

  useEffect(() => {
    getCategories();
  }, []);
  return (
    <ProductContext.Provider value={{ categories, dispatch, status }}>
      {children}
    </ProductContext.Provider>
  );
}

export function useProducts() {
  const context = useContext(ProductContext);
  return context;
}
