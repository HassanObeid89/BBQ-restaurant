import { useState } from "react";
import useForm from "../utils/useForm";
import { createDoc } from "../scripts/fireStore";
import { Link, useHistory } from "react-router-dom";
import InputField from "./inputField/InputField";
import productFields from "./inputField/productFields.json";
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

  const inputFields = productFields.map((input) => (
    <InputField options={input} handleChange={handleChange} values={values} />
  ));

  return (
    <form onSubmit={(event) => handleSubmit(event)}>
      <h2>Add New Product</h2>
      {inputFields}
      <Dropdown state={[isSelected, setIsSelected]} />
      <a onClick={openModel}>Add New Category</a>
      <section className="footer">
        <Link to="/admin">
          <button className="button-secondary">Cancel</button>
        </Link>
        <button className="button-main">Submit</button>
      </section>
    </form>
  );
}
