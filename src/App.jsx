//NPM packages
import { useState } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

//Project files
import NavBar from "./components/NavBar";
import MenuPage from "./pages/MenuPage";
import ProductPage from "./pages/ProductPage";
import AdminPage from "./pages/AdminPage";
import HomePage from "./pages/HomePage";
import ContactUs from "./pages/ContactUs";
import FormCreateProduct from "./components/FormCreateProduct";

import ModalContainer from "./components/ModalContainer";
import { useProduct } from "./state/ProductProvider";
import "./css/style.css";

export default function App() {
  

  const Browser = (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route path="/" component={HomePage} exact />
        <Route path="/menu" component={MenuPage}/>
        {/* <Route path="/admin" component={AdminPage} /> */}
        {/* <Route path="/addProductForm">
          <FormCreateProduct setModal={setModal} />
        </Route> */}

        <Route path="/contact us" component={ContactUs} />
      </Switch>
      {/* <ModalContainer modal={modal} setModal={setModal} /> */}
    </BrowserRouter>
  );

  return (
    <div className="App">
      {/* {status === 0 && <p>Loading...</p>}
      {status === 1 && Browser}
      {status === 2 && <p>Error</p>} */}
      {Browser}
    </div>
  );
}
