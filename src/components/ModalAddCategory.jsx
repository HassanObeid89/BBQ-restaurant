import useForm from "../utils/useForm";
import InputField from "./inputField/InputField";
import { createDoc } from "../scripts/fireStore";

import { getFirestore } from "firebase/firestore/lite";
import fields from "./inputField/fields.json";
export default function ModalAddCategory({ setModal }) {

  const [values, handleChange, setState] = useForm();
  function handleSubmit(e) {
    e.preventDefault()
    createDoc("categories", values);
    setModal(null);
    setState({});
  }
  return (
    <form onSubmit={(e)=>handleSubmit(e)}>
      <InputField
        handleChange={handleChange}
        values={values.name || ""}
        options={fields.Name}
      />
      <InputField
        handleChange={handleChange}
        values={values.name || ""}
        name="description"
        options={fields.description}
      />
      <InputField
        handleChange={handleChange}
        values={values.name || ""}
        name="imageUrl"
        options={fields.imageUrl}
      />
      <button>Submit</button>
    </form>
  );
}
