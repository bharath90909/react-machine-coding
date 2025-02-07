import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { menuData } from "./NestedMenu";
function RouterPage() {
  const [data, setData] = useState();
  const { dynamicID } = useParams();
  const findMenuItemById = (menuItems, dynamicID) => {
    for (const item of menuItems) {
      if (item.id === Number(dynamicID)) {
        return item; // Found the item
      }
      if (item.children) {
        const found = findMenuItemById(item.children, dynamicID); // Recursive search
        if (found) {
          return found; // Found in children
        }
      }
    }
    return null; // Not found
  };

  useEffect(() => {
    setData(findMenuItemById(menuData, dynamicID));
  }, [dynamicID]);

  return <div className="flex-1 bg-red-400">{<h1>{data?.label}</h1>}</div>;
}

export default RouterPage;
