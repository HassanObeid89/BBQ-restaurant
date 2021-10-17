//NPM packages
import { useState, useCallback, useEffect } from "react";
import { getCollection } from "./scripts/fireStore";

//Project files
import Browser from "./components/Browser";
import { useProduct } from "./state/ProductProvider";
import { useCategory } from "./state/CategoryProvider";
import "./css/style.css";

export default function App() {
  const [status, setStatus] = useState(0); // 0 loading, 1 loaded, 2 error
  const { dispatchProducts } = useProduct();
  const { dispatch } = useCategory();
  const path = "products";

  const path2 = "categories";

  // Methods
  const fetchCategory = useCallback(
    async (path) => {
      try {
        const categories = await getCollection(path);

        dispatch({ type: "SET_CATEGORIES", payload: categories });
      } catch {
        setStatus(2);
      }
    },
    [dispatch]
  );

  const fetchData = useCallback(
    async (path) => {
      try {
        const products = await getCollection(path);

        dispatchProducts({ type: "SET_PRODUCTS", payload: products });
        setStatus(1);
      } catch {
        setStatus(2);
      }
    },
    [dispatchProducts]
  );

  useEffect(() => {
    fetchData(path);
    fetchCategory(path2);
  }, [fetchCategory, fetchData]);

  return (
    <div className="App">
      {status === 0 && <p>Loading...</p>}
      {status === 1 && <Browser />}
      {status === 2 && <p>Error</p>}
    </div>
  );
}
