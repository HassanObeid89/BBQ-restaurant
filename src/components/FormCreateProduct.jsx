import { useState } from "react";
import useForm from "../utils/useForm";
import { createDoc } from "../scripts/fireStore";
import firebaseInstance from "../scripts/firebase";
import { getFirestore } from "firebase/firestore/lite";
import FormCreateIngredient from "./FormCreateIngredient";
import InputField from "./inputField/InputField";
import fields from "./inputField/fields.json";
export default function FormCreateProduct() {
  const database = getFirestore(firebaseInstance);
  const [values, handleChange, setvalues] = useForm();
  const [ingradient, setIngradient] = useState("");
  const [list, setList] = useState([]);

  function handleSubmit(event) {
    event.preventDefault();
    const newProduct = {
      ...values,
      ingradients: list,
    };
    createDoc(database, "test", newProduct);
    setvalues({});
    setList([]);
  }

  return (
    <form>
      <h2>Add New Product</h2>
      <InputField data={[handleChange, values]} options={fields.name} />
      <InputField data={[handleChange, values]} options={fields.price} />
      <InputField data={[handleChange, values]} options={fields.image} />
      <InputField data={[handleChange, values]} options={fields.description} />
      <FormCreateIngredient data={[ingradient, setIngradient, list, setList]} />
      <button onClick={handleSubmit}>Submit</button>
    </form>
  );
}
