

export default function FormCreateIngredient({data}) {
  const [ingradient,setIngradient,list,setList] = data

  function onSubmit(event) {
    event.preventDefault();
    const ingradients = ingradient;
    setList([...list, ingradients]);
    setIngradient("");
  }
  return (
    <section>
      <label>
        Ingradients:
        <input
          type="text"
          placeholder="Chilli"
          value={ingradient}
          name="ingradients"
          onChange={(event) => setIngradient(event.target.value)}
        />
        <button onClick={(event) => onSubmit(event)}>Add</button>
      </label>
      {list}
    </section>
  );
}
