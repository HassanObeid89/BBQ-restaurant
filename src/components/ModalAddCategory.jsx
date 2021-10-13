import useForm from "../utils/useForm";
import InputField from "./inputField/InputField";
import { createDoc } from "../scripts/fireStore";
import firebaseInstance from "../scripts/firebase";
import { getFirestore } from "firebase/firestore/lite";
import fields from "./inputField/fields.json";
export default function ModalAddCategory({ setModal }) {
  const database = getFirestore(firebaseInstance);
  const [values, handleChange, setState] = useForm();
  function handleSubmit(e) {
    e.preventDefault()
    createDoc(database, "categories", values);
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
