export default function InputField({
  handleChange,
  values,
  type,
  label,
  name,
  placeholder,
}) {
  // const { label, instructions, placeholder, fname, type } = options;
  return (
    <section>
      <label>
        {/* {instructions && <small>{instructions}</small>} */}
        <b>{label}</b>
        <input
          type={type}
          name={name}
          value={values.name}
          placeholder={placeholder}
          onChange={handleChange}
        />
      </label>
    </section>
  );
}
