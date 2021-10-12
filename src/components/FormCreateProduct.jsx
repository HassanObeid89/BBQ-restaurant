import { useState } from "react";
import useForm from "../utils/useForm";
import { createDoc } from "../scripts/fireStore";
import firebaseInstance from "../scripts/firebase";
import { getFirestore } from "firebase/firestore/lite";
import FormCreateIngredient from "./FormCreateIngredient";
import InputField from "./inputField/InputField";
import fields from "./inputField/fields.json";
import Dropdown from "./Dropdown";
import ModalAddCategory from "./ModalAddCategory";
import { useProducts } from "../utils/ProductProvider";
import { useHistory } from "react-router-dom";

export default function FormCreateProduct({ setModal }) {
  const {categories} = useProducts()
  const location = useHistory();
  const database = getFirestore(firebaseInstance);
  const [values, handleChange, setState] = useForm();
  const [ingradient, setIngradient] = useState("");
  const [list, setList] = useState([]);
  const [isSelected, setIsSelected] = useState("Please choose category");

  function openModal(e) {
    e.preventDefault()
    setModal(<ModalAddCategory setModal={setModal}/>);
  }
  function handleSubmit(event) {
    event.preventDefault();
    const newProduct = {
      ...values,
      ingradients: list,
      category: isSelected,
    };
    createDoc(database, "products", newProduct);
    setList([]);
    setState({});
    alert('Product added')
    location.goBack();
  }

  return (
    <form>
      <h2>Add New Product</h2>
      <InputField data={[handleChange, values]} options={fields.productname} />
      <InputField data={[handleChange, values]} options={fields.price} />
      <InputField data={[handleChange, values]} options={fields.imageUrl} />
      <InputField data={[handleChange, values]} options={fields.description} />
      <FormCreateIngredient data={[ingradient, setIngradient, list, setList]} />
      <Dropdown categories={categories} state={[isSelected, setIsSelected]} />
      <button onClick={openModal}>Add New Category</button><br/>
      <button onClick={(event) => handleSubmit(event)}>Submit</button>
    </form>
  );
}
