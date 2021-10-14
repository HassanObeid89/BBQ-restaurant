import { Link } from "react-router-dom";
import Button from "./Button";

export default function ProductCard({ item }) {
  const { id,imgURL, name, price, description } = item;
  return (
    <li className="menu-page">
      <img  src={imgURL} />
      <h2>{name}</h2>
      <span>{price}:-</span>
      <p>{description}</p>
      <Link to={`/productpage/${id}`}>
      <Button text="View" />
      </Link>
    </li>
  );
}
