import fields from "./inputField/fields.json";

export default function FormAddIngredient({ data }) {
  const [ingredient, setIngredient, list, setList] = data;
  const { label, placeholder, type, name } = fields.ingredients;

  function onSubmit(event) {
    event.preventDefault();
    
    setList([...list, ingredient]);
    setIngredient("");
  }
  const ingredientList = list.map((ingredient)=><li>{ingredient}</li>)
  return (
    <section className='ingradient'>
      <label>
        <b>{label}</b>
        <input
          type={type}
          name={name}
          value={ingredient}
          placeholder={placeholder}
          onChange={(event) => setIngredient(event.target.value)}
        />
        <button onClick={(event) => onSubmit(event)}>+</button>
        
      </label>
      <ul>{ingredientList}</ul>
    </section>
  );
}
