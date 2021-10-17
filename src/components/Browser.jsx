//NPM packages
import { useState } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

//Project files
import NavBar from "../components/NavBar";
import MenuPage from "../pages/MenuPage";
import ProductPage from "../pages/ProductPage";
import AdminPage from "../pages/AdminPage";
import HomePage from "../pages/HomePage";
import ContactUs from "../pages/ContactUs";
import FormAddProduct from "../components/FormAddProduct";
import CategoryPage from "../pages/CategoryPage";
import ModalContainer from "../components/ModalContainer";


export default function Browser() {
  const [modal, setModal] = useState(null);
  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route path="/" component={HomePage} exact />
        <Route path="/categorypage/:categoryname" component={CategoryPage} />
        <Route path="/productpage/:id" component={ProductPage} />
        <Route path="/menu" component={MenuPage} />
        <Route path="/admin" component={AdminPage} exact />
        <Route path="/addProductForm">
          <FormAddProduct setModal={setModal} />
        </Route>
        <Route path="/contact us" component={ContactUs} />
      </Switch>
      <ModalContainer modal={modal} setModal={setModal} />
    </BrowserRouter>
  );
}
