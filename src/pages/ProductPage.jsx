import { useParams, useHistory } from "react-router-dom";
import { useProduct } from "../state/ProductProvider";

export default function ProductPage() {
  const { id } = useParams();
  const location = useHistory();
  const { products } = useProduct();

  // This is confusing, why are you filtering and then doing map.
  // You should break down each one into a different variable and use the name of the variable
  // to explain what are your intentions.
  const product = products
    .filter((product) => product.id === id)
    .map((item) => item);

  // Here if you always use the first product index [0] then in products you should have extracted that
  return (
    <div className="product-wrapper">
      <img src={product[0].imgURL || ""} alt="" />
      <h1>{product[0].name}</h1>
      <h2>{product[0].price}:-</h2>
      <p>{product[0].description}</p>
      <h3>Ingredients:</h3>
      <ul>{product[0].ingredients}</ul>
      <button onClick={() => location.goBack()} className="button-main">
        Go back
      </button>
    </div>
  );
}
