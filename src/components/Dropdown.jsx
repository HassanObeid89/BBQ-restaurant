import { useState, useCallback, useEffect } from "react";
import { useCategory } from "../state/CategoryProvider";
import caretdownIcon from "../assets/images/caretdownIcon.svg";
import { getCollection } from "../scripts/fireStore";
export default function Dropdown({ state }) {
  const [isActive, setIsActive] = useState(false);
  const [isSelected, setIsSelected] = state;
  const {categories}=useCategory()
 


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
