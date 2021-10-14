//NPM packages
import { useState, useCallback, useEffect } from "react";
import { getCollection } from "./scripts/fireStore";
import { BrowserRouter, Switch, Route } from "react-router-dom";

//Project files
import NavBar from "./components/NavBar";
import MenuPage from "./pages/MenuPage";
import ProductPage from "./pages/ProductPage";
import AdminPage from "./pages/AdminPage";
import HomePage from "./pages/HomePage";
import ContactUs from "./pages/ContactUs";
import FormAddProduct from "./components/FormAddProduct";

import ModalContainer from "./components/ModalContainer";
import { useProduct } from "./state/ProductProvider";
import "./css/style.css";
import FormAddCategory from "./components/FormAddCategory";

export default function App() {
  const [modal, setModal] = useState(null);
  const [status, setStatus] = useState(0); // 0 loading, 1 loaded, 2 error
  const { dispatchProducts } = useProduct();

  const path = "products";
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

  useEffect(() => fetchData(path), []);

  const Browser = (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route path="/" component={HomePage} exact />
        <Route path="/menu" component={MenuPage} />
        <Route path="/admin" component={AdminPage} />
        <Route path="/addProductForm" component={FormAddProduct} />
        <Route path="/addCategoryForm" component={FormAddCategory} />
        <Route path="/contact us" component={ContactUs} />
      </Switch>
      <ModalContainer modal={modal} setModal={setModal} />
    </BrowserRouter>
  );

  return (
    <div className="App">
      {status === 0 && <p>Loading...</p>}
      {status === 1 && Browser}
      {status === 2 && <p>Error</p>}
    </div>
  );
}
