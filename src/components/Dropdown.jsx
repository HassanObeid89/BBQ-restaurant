import { useState } from "react";
import caretdownIcon from "../assets/images/caretdownIcon.svg";
export default function Dropdown({ isSelected, setIsSelected, categories }) {
  const [isActive, setIsActive] = useState(false);
    console.log(categories)
  const options = categories.map((category) => (
    <div
    key={category.id}
      className="dropdown-item"
      onClick={() => {
        setIsSelected(category.Name);
        setIsActive(false);
      }}
    >
      {category.Name}
    </div>
  ));
  return (
    <section className="dropdown">
      <div className="dropdown-btn" onClick={() => setIsActive(!isActive)}>
        {isSelected}
        <img src={caretdownIcon} />
      </div>
      {isActive && <div className="dropdown-content">{options}</div>}
    </section>
  );
}
