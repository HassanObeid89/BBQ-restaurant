export default function InputField({ options,handleChange,values }) {
  const { label, instructions, placeholder, name, type } = options;
  return (
    <section>
      <label>
        {instructions && <small>{instructions}</small>}
        <b>{label}</b>
        <input
          type={type}
          name={name}
          value={values.name || ''}
          placeholder={placeholder}
          onChange={handleChange}
        />
      </label>
    </section>
  );
}
