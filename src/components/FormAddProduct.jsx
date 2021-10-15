import { useState } from "react";
import useForm from "../utils/useForm";
import { createDoc } from "../scripts/fireStore";
import { Link, useHistory } from "react-router-dom";

import FormCreateIngredient from "./FormAddIngredient";
import Dropdown from "./Dropdown";
import ModalAddCategory from "./ModalAddCategory";
import Button from "./Button";
import { useProduct } from "../state/ProductProvider";

export default function FormAddProduct({setModal}) {
  
  const { dispatchProducts } = useProduct();
  const location = useHistory();
  const [ingredient, setIngredient] = useState("");
  const [list, setList] = useState([]);
  const [isSelected, setIsSelected] = useState("Please choose category");
  const [values, handleChange, setState] = useForm();


  function handleSubmit(event) {
    event.preventDefault();
    const newProduct = {
      ...values,
      ingredients: list,
      category: isSelected,
    };
    createDoc("products", newProduct);
    setList([]);
    setState({});
    dispatchProducts({ type: "ADD_PRODUCT", payload: newProduct });
    alert("Product added");
    location.goBack();
  }

  function openModel(event){
    event.preventDefault()
    setModal(<ModalAddCategory setModal={setModal}/>)
  }

  return (
    <form onSubmit={(event) => handleSubmit(event)}>
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
        <textarea
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
      <FormCreateIngredient data={[ingredient, setIngredient, list, setList]} />
      <Dropdown state={[isSelected, setIsSelected]} />
      <Link onClick={openModel}>Add New Category</Link>
      <Button text="Submit" />
    </form>
  );
}
