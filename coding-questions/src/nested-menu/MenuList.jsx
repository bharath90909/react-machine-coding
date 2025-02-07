import React from "react";
import MenuItem from "./MenuItem";

function MenuList({ menus }) {
  return (
    <>
      <ul className="pl-2 mt-2">
        {menus.map((menuItem) => (
          <MenuItem menuItem={menuItem} />
        ))}
      </ul>
    </>
  );
}

export default MenuList;
