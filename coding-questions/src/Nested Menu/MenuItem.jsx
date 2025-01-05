import React, { useState } from "react";
import MenuList from "./MenuList";
import { Link } from "react-router-dom";
function MenuItem({ menuItem }) {
  const [isOpened, setOpened] = useState(false);

  return (
    <li className="mb-4">
      <div className="flex flex-row justify-between border border-2 border-red-500 ">
        <Link to={`${menuItem.to}/${menuItem.id}`}>
          <p className="flex-1">{menuItem.label}</p>
        </Link>
        {menuItem?.children && (
          <span onClick={() => setOpened((prev) => !prev)}>
            {isOpened ? "-" : "+"}
          </span>
        )}
      </div>
      {menuItem?.children && isOpened && <MenuList menus={menuItem.children} />}
    </li>
  );
}

export default MenuItem;
