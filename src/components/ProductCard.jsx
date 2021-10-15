import { Link } from "react-router-dom";

export default function ProductCard({ item }) {
  const { id, imgURL, name, price, description } = item;
  return (
    <li className="menu-page">
      <img src={imgURL} alt="" />
      <h2>{name}</h2>
      <span>{price}:-</span>
      <p>{description}</p>
      <Link to={`/productpage/${id}`}>
        <button className="button-main" />
      </Link>
    </li>
  );
}
