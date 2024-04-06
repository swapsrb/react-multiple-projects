import { useState } from "react";
import MenuList from "./menu-list";
import { FaPlus, FaMinus } from "react-icons/fa"
import "./styles.css";

export default function MenuItem({ item }) {
  const [displayCurrentChild, setDisplayCurrentChild] = useState({});

  function handleToggleChildren(getCurrentItemLabel) {
    setDisplayCurrentChild({
      ...displayCurrentChild,
      [getCurrentItemLabel]: !displayCurrentChild[getCurrentItemLabel],
    });
  }

  return (
    <li>
      <div className="menu-item">
        <p>{item.label}</p>
        {item && item.children && item.children.length ? (
          <span onClick={() => handleToggleChildren(item.label)}>
            {displayCurrentChild[item.label] ? <FaMinus size={25} color="#fff"/> : <FaPlus size={25} color="#fff"/>}
          </span>
        ) : null}
      </div>

      {item && item.children && item.children.length && displayCurrentChild[item.label]? (
        <MenuList list={item.children} />
      ) : null}
    </li>
  );
}
