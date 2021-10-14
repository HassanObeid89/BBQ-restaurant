import fields from "./inputField/fields.json";

export default function FormAddIngredient({ data }) {
  const [ingradient, setIngradient, list, setList] = data;
  const { label, placeholder, type, name } = fields.ingradients;

  function onSubmit(event) {
    event.preventDefault();
    const ingradients = ingradient;
    setList([...list, ingradients]);
    setIngradient("");
  }
  const ingradientList = list.map((ingradient)=><li>{ingradient}</li>)
  return (
    <section className='ingradient'>
      <label>
        <b>{label}</b>
        <input
          type={type}
          name={name}
          value={ingradient}
          placeholder={placeholder}
          onChange={(event) => setIngradient(event.target.value)}
        />
        <button onClick={(event) => onSubmit(event)}>+</button>
        
      </label>
      <ul>{ingradientList}</ul>
    </section>
  );
}
