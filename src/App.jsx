//NPM packages
import { useState } from "react";

//Project files
import NavBar from './components/NavBar'
import MenuPage from "./pages/MenuPage";
import ProductPage from "./pages/ProductPage";
import FormCreateProduct from "./components/FormCreateProduct";

import ModalContainer from "./components/ModalContainer";
import { useProducts } from "./utils/ProductProvider";
import "./css/style.css";

export default function App() {
  //Local state
  const { status, categories } = useProducts();
  const [modal, setModal] = useState(null);
  //properties

  const menuList = categories.map((category) => (
    <MenuPage key={category.id} category={category} />
  ));

  return (
    <div className="App">
      <NavBar/>
      {status === 0 && <p>Loading...</p>}
      {status === 1 && <ul>{menuList}</ul>}
      {status === 2 && <p>Error</p>}
      {/* {status === 1 &&<FormCreateProduct categories={categories} setModal={setModal} />} */}
      {status === 1 && <ModalContainer modal={modal} setModal={setModal} />}
    </div>
  );
}
