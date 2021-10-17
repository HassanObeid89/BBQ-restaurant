import useForm from "../utils/useForm";
import InputField from "./inputField/InputField";
import categoryFields from './inputField/categoryFields.json'
import { createDoc } from "../scripts/fireStore";
import { useCategory } from "../state/CategoryProvider";
export default function ModalAddCategory({ setModal }) {
  const { dispatch } = useCategory();
  const [values, handleChange, setState] = useForm();
  function handleSubmit(e) {
    e.preventDefault();
    createDoc("categories", values);
    dispatch({ type: "ADD_CATEGORY", payload: values });
    setState({});
    alert("Category added");
    setModal(null);
  }

  const inputFields = categoryFields.map((input) => (
    <InputField options={input} handleChange={handleChange} values={values} />
  ));
  return (
    <form className="modalForm" onSubmit={(e) => handleSubmit(e)}>
      <h2>Add Category</h2>
      {inputFields}
      {/* <label>
        <b>Category name</b>
        <input
          value={values.name || ""}
          type="text"
          name="name"
          placeholder="meat"
          onChange={handleChange}
        />
      </label>
      <label>
        <b>Description</b>
        <textarea
          value={values.description || ""}
          type="text"
          name="description"
          placeholder="Description...."
          onChange={handleChange}
        />
      </label>
      <label>
        <b>Image Url</b>
        <input
          type="text"
          name="imgURL"
          value={values.imgURL || ""}
          placeholder="https://unsplash.com/photos/8OpyEpJVgiQ"
          onChange={handleChange}
        />
      </label> */}
      <section className="footer">
        <button onClick={() => setModal(null)} className="button-secondary">
          Cancel
        </button>
        <button className="button-main">Submit</button>
      </section>
    </form>
  );
}
