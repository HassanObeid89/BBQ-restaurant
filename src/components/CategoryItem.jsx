import { Link } from "react-router-dom";

export default function CategoryItem({ item }) {
  const { imgURL, name, description } = item;
  return (
    <li className="menu-page">
      <img src={imgURL} alt="" />
      <h1>{name}</h1>
      <p>{description}</p>
      <Link to={`/categorypage/${name}`}>
        <button className="button-main">View</button>
      </Link>
    </li>
  );
}
