//NPM packages
import { useState } from "react";

//Project files
import CategoryPage from "./components/CategoryPage";
import ProductPage from "./components/ProductPage";
import FormCreateProduct from "./components/FormCreateProduct";
import "./css/categoryPage.css";
import "./css/dropdown.css";
import ModalContainer from "./components/ModalContainer";
import { useProducts } from "./utils/ProductProvider";

export default function App() {
  //Local state
  const { status, categories } = useProducts();
  const [modal, setModal] = useState(null);
  //properties

  const categoryList = categories.map((category) => (
    <CategoryPage key={category.id} category={category} />
  ));

  return (
    <div className="App">
      <p>BBQ restuarant</p>
      {status === 0 && <p>Loading...</p>}
      {status === 1 && <ul>{categoryList}</ul>}
      {status === 2 && <p>Error</p>}
      {status === 1 &&<FormCreateProduct categories={categories} setModal={setModal} />}
      {status === 1 && <ModalContainer modal={modal} setModal={setModal} />}
    </div>
  );
}
