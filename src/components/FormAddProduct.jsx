import { useState, useCallback, useEffect } from "react";
import useForm from "../utils/useForm";
import { createDoc } from "../scripts/fireStore";
import FormCreateIngredient from "./FormAddIngredient";
import { getCollection } from "../scripts/fireStore";
import Dropdown from "./Dropdown";
import ModalAddCategory from "./FormAddCategory";
import Button from "./Button";

import { useHistory } from "react-router-dom";
import { useCategory } from "../state/CategoryProvider";
import { useProduct } from "../state/ProductProvider";

export default function FormAddProduct() {
  const { categories, dispatch } = useCategory();
  const {dispatchProducts} = useProduct()
  const location = useHistory();
  const [ingradient, setIngradient] = useState("");
  const [list, setList] = useState([]);
  const [isSelected, setIsSelected] = useState("Please choose category");
  const [values, handleChange, setState] = useForm();

  const path = "categories";

  // Methods
  const fetchData = useCallback(
    async (path) => {
      try {
        const categories = await getCollection(path);

        dispatch({ type: "SET_CATEGORIES", payload: categories });
      } catch {}
    },
    [dispatch]
  );

  useEffect(() => fetchData(path), [fetchData]);

  function handleSubmit(event){
    event.preventDefault();
    const newProduct = {
      ...values,
      ingradients: list,
      category: isSelected,
    };
    createDoc("products", newProduct);
    // setList([]);
    // setState({});
    dispatchProducts({type:"ADD_PRODUCT", payload:newProduct})
    // alert("Product added");
    location.goBack();
  };

  return (
   
    <form onSubmit={(event)=>handleSubmit(event)}>
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
      <Button text="Submit" />
    </form>
  );
}
