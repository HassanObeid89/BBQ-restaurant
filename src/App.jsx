//NPM packages
import { useState, useEffect, useCallback } from "react";
import { getFirestore } from "firebase/firestore/lite";
//Project files
import CategoryPage from "./components/CategoryPage";
import ProductPage from "./components/ProductPage";
import FormCreateProduct from "./components/FormCreateProduct";
import firebaseInstance from "./scripts/firebase";
import { getCollection } from "./scripts/fireStore";
import './css/categoryPage.css';
import './css/dropdown.css';

export default function App() {
  //Local state
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([])
  const [status, setStatus] = useState(0);

  //properties
  const database = getFirestore(firebaseInstance);

  //Methods
  const getCategories = useCallback(async () => {
    const collection = await getCollection(database, "categories");
    setCategories(collection);
    console.log(collection);
    setStatus(1);
  }, [database]);

  const getProducts = useCallback(async () => {
    const collection = await getCollection(database, "products");
    setProducts(collection);
    setStatus(1);
  }, [database]);

  useEffect(() => {
    getCategories();
    getProducts()
  }, [getCategories, getProducts]);

  // const category = categories.map((category) => (
  //   <CategoryPage key={category.id} category={category} />
  // ));

  // const productList = products.map((product) => (
  //   <ProductPage key={product.id} product={product} />
  // ));

  return (
    <div className="App">
      <p>BBQ restuarant</p>
      {status === 0 && <p>Loading...</p>}
      {/* {status === 1 && <ul>{category}</ul>}
      {status === 1 && <ul>{productList}</ul>} */}
      {status === 2 && <p>Error</p>}
      {status === 1 &&  <FormCreateProduct categories={categories} />}
    </div>
  );
}
