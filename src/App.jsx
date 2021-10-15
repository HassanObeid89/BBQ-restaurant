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
import CategoryPage from "./pages/CategoryPage";
import ModalContainer from "./components/ModalContainer";
import { useProduct } from "./state/ProductProvider";
import { useCategory } from "./state/CategoryProvider";
import "./css/style.css";

export default function App() {
  const [modal, setModal] = useState(null);
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
  }, []);

  const Browser = (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route path="/" component={HomePage} exact />
        <Route path="/categorypage/:categoryname" component={CategoryPage} />
        <Route path='/productpage/:id' component={ProductPage}/>
        <Route path="/menu" component={MenuPage} />
        <Route path="/admin" component={AdminPage} />
        <Route path="/addProductForm">
          <FormAddProduct setModal={setModal} />
        </Route>
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
