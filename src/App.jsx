//NPM packages
import { useState, useEffect } from "react";
import { getFirestore } from "firebase/firestore/lite";

//Project files
import firebaseInstance from "./scripts/firebase";
import { getCollection } from "./scripts/fireStore";

export default function App() {
  //Local state
  const [categories, setCategories] = useState([]);

  //Properties
  const database = getFirestore(firebaseInstance);

  //Methods
  useEffect(() => {
    getCollection(database, "categories").then((result) => {
      setCategories(result)
      console.log(result)
    });
  }, [database]);

  //const category = categories.map(()=><CategoryPage/>)

  
  return (
    <div className="App">
      <p>BBQ restuarant</p>
    </div>
  );
}
