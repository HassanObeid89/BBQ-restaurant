import { useParams,useHistory } from "react-router-dom";
import { useProduct } from "../state/ProductProvider";
import Ingredients from "../components/Ingredients.jsx";
export default function ProductPage() {
  const { id } = useParams();
  const location = useHistory()
  const { products } = useProduct();
  const product = products
    .filter((product) => product.id === id)
    .map((item) => item);
  const ingredients = product.map((item) => (
    <Ingredients key={item.id} data={item.ingredients} />
  ));
  return (
    <div className="product-wrapper">
      <img src={product[0].imgURL} alt="" />
      <h1>{product[0].name}</h1>
      <h2>{product[0].price}:-</h2>
      <p>{product[0].description}</p>
      <h3>Ingredients:</h3>
      <ul>{ingredients}</ul>
      <button onClick={()=>location.goBack()} className='button-main'>Go back</button>
    </div>
  );
}
