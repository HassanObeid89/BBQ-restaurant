import { useState } from "react";
import useForm from "../utils/useForm";
import { createDoc } from "../scripts/fireStore";
import firebaseInstance from "../scripts/firebase";
import { getFirestore } from "firebase/firestore/lite";
import FormCreateIngredient from "./FormCreateIngredient";
import InputField from "./inputField/InputField";
import fields from "./inputField/fields.json";
import Dropdown from "./Dropdown";

export default function FormCreateProduct({categories}) {
  const database = getFirestore(firebaseInstance);
  const [values, handleChange, setState] = useForm();
  const [ingradient, setIngradient] = useState("");
  const [list, setList] = useState([]);
  const [isSelected, setIsSelected] = useState("Please choose category");

  function handleSubmit() {
    // event.preventDefault();
    const newProduct = {
      ...values,
      ingradients: list,
      category:isSelected
    };
    createDoc(database, "test", newProduct);
    setList([]);
    setState({});
  }

  return (
    <form>
      <h2>Add New Product</h2>
      <InputField data={[handleChange, values]} options={fields.productname} />
      <InputField data={[handleChange, values]} options={fields.price} />
      <InputField data={[handleChange, values]} options={fields.image} />
      <InputField data={[handleChange, values]} options={fields.description} />
      <FormCreateIngredient data={[ingradient, setIngradient, list, setList]} />
      <Dropdown categories={categories} isSelected={isSelected} setIsSelected={setIsSelected} />
      <button onClick={(event) => handleSubmit(event)}>Submit</button>
    </form>
  );
}
