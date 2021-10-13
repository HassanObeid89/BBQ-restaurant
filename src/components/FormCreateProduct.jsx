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
  const { categories } = useProducts();
  const location = useHistory();
  const database = getFirestore(firebaseInstance);

  const [ingradient, setIngradient] = useState("");
  const [list, setList] = useState([]);
  const [isSelected, setIsSelected] = useState("Please choose category");
  const [values, handleChange, setState] = useForm();
  function openModal(e) {
    e.preventDefault();
    setModal(<ModalAddCategory setModal={setModal} />);
  }
  const handleSubmit = (event) => {
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
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add New Product</h2>
      <label>
        <b>product name</b>
        <input
          value={values.name || ""}
          type="text"
          name="name"
          placeholder="meat"
          onChange={handleChange}
        />
      </label>
      <label>
        <b>product price</b>
        <input
          type="text"
          name="price"
          placeholder="230:-"
          value={values.price || ""}
          onChange={handleChange}
        />
      </label>
      <label>
        <b>Description</b>
        <input
          type="text"
          name="description"
          placeholder="the....."
          value={values.description || ""}
          onChange={handleChange}
        />
      </label>
      <label>
        <b>Image Url</b>
        <input
          type="text"
          name="imgURL"
          placeholder="www.ghfj.com"
          value={values.imgURL || ""}
          onChange={handleChange}
        />
      </label>

      {/* <InputField
        handleChange={handleChange}
        values={values}
        // values={values.name || ""}
        options={fields.name}
      />
      <InputField
        handleChange={handleChange}
        values={values}
        // values={values.name || ""}
        options={fields.price}
      />
      <InputField
        handleChange={handleChange}
        values={values}
        // values={values.name || ""}
        options={fields.imageUrl}
      />
      <InputField
        handleChange={handleChange}
        values={values}
        // values={values.name || ""}
        options={fields.description}
      /> */}
      <FormCreateIngredient data={[ingradient, setIngradient, list, setList]} />
      <Dropdown categories={categories} state={[isSelected, setIsSelected]} />
      <button onClick={openModal}>Add New Category</button>
      <br />
      <button type="submit">Submit</button>
    </form>
  );
}
