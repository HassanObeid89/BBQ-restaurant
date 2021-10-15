import { useParams, useHistory } from "react-router-dom";
import { useProduct } from "../state/ProductProvider";

export default function ProductPage() {
  const { id } = useParams();
  const location = useHistory();
  const { products } = useProduct();
  const product = products
    .filter((product) => product.id === id)
    .map((item) => item);

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
