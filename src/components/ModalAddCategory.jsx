import useForm from "../utils/useForm";
import InputField from "./inputField/InputField";
import categoryFields from "./inputField/categoryFields.json";
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
      <section className="footer">
        <button onClick={() => setModal(null)} className="button-secondary">
          Cancel
        </button>
        <button className="button-main">Submit</button>
      </section>
    </form>
  );
}
