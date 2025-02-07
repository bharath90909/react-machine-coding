import React from "react";
import MenuList from "./MenuList";
export const menuData = [
  {
    id: 1,
    label: "Home",
    to: "/home",
  },
  {
    id: 2,
    label: "About",
    to: "/about",
    children: [
      {
        id: 3,
        label: "About 1",
        to: "/about",
      },

      {
        id: 4,
        label: "About 2",
        to: "/about",
      },
    ],
  },
  {
    id: 5,
    label: "Contact",
    to: "/contact",
    children: [
      {
        id: 6,
        label: "Contact 1",
        to: "/contact",
        children: [
          {
            id: 7,
            label: "Nested of Contact 1",
            to: "/contact",
          },
        ],
      },

      {
        id: 8,
        label: "Contact 2",
        to: "/contact",
        children: [
          {
            id: 9,
            label: "Nested of Contact 2",
            to: "/contact",
          },
        ],
      },
    ],
  },
];
function NestedMenu() {
  return (
    <div className="h-full w-[20vw] p-4 bg-slate-500 ">
      <MenuList menus={menuData} />
    </div>
  );
}

export default NestedMenu;
