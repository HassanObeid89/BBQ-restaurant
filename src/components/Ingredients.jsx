
export default function Ingredients({ data }) {
    

  const Ingredient = data.map((ingredient, index) => (
    <li key={index}>{ingredient}</li>
  ));
  return (
    <div className='ingredient-wrapper'>
      {Ingredient}
    </div>
  );
}
