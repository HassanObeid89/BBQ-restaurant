export default function InputField({ data, options }) {
  const [handleChange, values] = data;
  const {label,instructions,placeholder,type,name} = options

  return (
    <fieldset>
      <label>
        {instructions&&<small>{instructions}</small>}
      <b>{label}</b>
      <input
        type={type}
        name={name}
        value={values.name || ""}
        placeholder={placeholder}
        onChange={handleChange}
      />
      </label>
    </fieldset>
  );
}
