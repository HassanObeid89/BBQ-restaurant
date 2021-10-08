//NPM packages
import { useState, useEffect, useCallback } from "react";
import { getFirestore } from "firebase/firestore/lite";
//Project files
import CategoryPage from "./components/CategoryPage";
import firebaseInstance from "./scripts/firebase";
import { getCollection } from "./scripts/fireStore";

export default function App() {
  //Local state
  const [categories, setCategories] = useState([]);
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

  useEffect(() => {
    getCategories();
  }, [getCategories]);

  const category = categories.map((category) => (
    <CategoryPage key={category.id} category={category} />
  ));

  return (
    <div className="App">
      <p>BBQ restuarant</p>
      {status === 0 && <p>Loading...</p>}
      {status === 1 && <ul>{category}</ul>}
      {status === 2 && <p>Error</p>}
    </div>
  );
}
