import { useState } from "react";
import useForm from "../utils/useForm";
import { createDoc } from "../scripts/fireStore";
import { Link, useHistory } from "react-router-dom";

import Dropdown from "./Dropdown";
import ModalAddCategory from "./ModalAddCategory";
import { useProduct } from "../state/ProductProvider";

export default function FormAddProduct({ setModal }) {
  const { dispatchProducts } = useProduct();
  const location = useHistory();
  const [isSelected, setIsSelected] = useState("Please choose category");
  const [values, handleChange, setState] = useForm();

  function handleSubmit(event) {
    event.preventDefault();
    const newProduct = {
      ...values,
      category: isSelected,
    };
    createDoc("products", newProduct);
    setState({});
    dispatchProducts({ type: "ADD_PRODUCT", payload: newProduct });
    alert("Product added");
    location.goBack();
  }

  function openModel(event) {
    event.preventDefault();
    setModal(<ModalAddCategory setModal={setModal} />);
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
      <label>
        <b>Ingredients</b>
        <input
          type="text"
          name="ingredients"
          placeholder="Meat, Oil, Salt"
          value={values.ingredients || ""}
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
      <Dropdown state={[isSelected, setIsSelected]} />
      <Link onClick={openModel}>Add New Category</Link>
      <section>
      <Link to='/admin'>
      <button className='button-secondary'>Cancel</button>
      </Link>
      <button className='button-main'>Submit</button>
      </section>
    </form>
  );
}
