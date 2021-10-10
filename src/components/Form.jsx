import { useState } from "react";
import useForm from "../utils/useForm";
import { createDoc } from "../scripts/fireStore";
import firebaseInstance from "../scripts/firebase";
import { getFirestore } from "firebase/firestore/lite";

export default function Form() {
  const database = getFirestore(firebaseInstance);
  const [values, handleChange,setvalues] = useForm();
  const [ingradient, setIngradient] = useState("");
  const [list, setList] = useState([]);

  function onSubmit(event) {
    event.preventDefault();
    const ingradients = ingradient;
    setList([...list, ingradients]);
    setIngradient("");
  }

  function handleSubmit(e) {
    e.preventDefault();
    const newProduct = {
      ...values,ingradients:list
    };
    createDoc(database, "test", newProduct);
    setvalues({})
  }

  return (
    <form>
      <h2>Add New Product</h2>
      <label>
        Product Name:
        <input
          type="text"
          placeholder="Grilled meat"
          value={values.name || ""}
          name="name"
          onChange={handleChange}
        />
      </label>

      <label>
        price:
        <input
          type="number"
          placeholder="35"
          value={values.price || ""}
          name="price"
          onChange={handleChange}
        />
      </label>
      <label>
        Image:
        <input
          type="text"
          placeholder="https://image-url.com"
          value={values.imageUrl || ""}
          name="imageUrl"
          onChange={handleChange}
        />
      </label>
      <label>
        Description:
        <input
          type="text"
          placeholder="the ...."
          value={values.description||""}
          name="description"
          onChange={handleChange}
        />
      </label>
      <label>
        Ingradients:
        <input
          type="text"
          placeholder="Chilli"
          value={ingradient}
          name="ingradients"
          onChange={(e)=>setIngradient(e.target.value)}
        />
        <button onClick={(event) => onSubmit(event)}>Add</button>
      </label>
      {list}
      <button onClick={handleSubmit}>Submit</button>
    </form>
  );
}
