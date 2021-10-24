import { useState } from "react";
import { useCategory } from "../state/CategoryProvider";
import caretdownIcon from "../assets/images/caretdownIcon.svg";

export default function Dropdown({ state }) {
  const [isActive, setIsActive] = useState(false);
  const [isSelected, setIsSelected] = state;
  const { categories } = useCategory();
  function handleClick(category) {
    setIsSelected(category.name);
    setIsActive(false);
  }
  const options = categories.map((category) => (
    <div
      key={category.id}
      className="dropdown-item"
      onClick={() => handleClick(category)}
    >
      {category.name}
    </div>
  ));

  return (
    <section className="dropdown">
      {/* Divs should not have click events -1 */}
      <div className="dropdown-btn" onClick={() => setIsActive(!isActive)}>
        {isSelected}
        <img src={caretdownIcon} alt="" />
      </div>
      {isActive && <div className="dropdown-content">{options}</div>}
    </section>
  );
}
