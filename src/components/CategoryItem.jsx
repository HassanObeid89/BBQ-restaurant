import Button from "./Button";
export default function CategoryItem({ item }) {
  const { imgURL, name, description } = item;
  return (
    <li className="menu-page">
      <img src={imgURL} alt={description} />
      <h1>{name}</h1>
      <p>{description}</p>
      <Button text="View" />
    </li>
  );
}
