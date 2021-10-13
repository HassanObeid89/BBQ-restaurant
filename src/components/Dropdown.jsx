import { useState } from "react";
import caretdownIcon from "../assets/images/caretdownIcon.svg";
export default function Dropdown({ state, categories }) {
  const [isActive, setIsActive] = useState(false);
  const [isSelected, setIsSelected] = state;
  const options = categories.map((category) => (
    <div
      key={category.id}
      className="dropdown-item"
      onClick={() => {
        setIsSelected(category.name);
        setIsActive(false);
      }}
    >
      {category.name}
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
