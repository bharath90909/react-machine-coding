import React, { useState } from "react";
import { use } from "react";
const tabs = Array.from({ length: 5 }, (_, i) => {
  return {
    id: i + 1,
    label: `tab ${i + 1}`,
    content: `tab ${i + 1} content`,
  };
});
function TabsSwitching() {
  const [index, setIndex] = useState(0);
  return (
    <div>
      <div>
        {tabs.map((tab, i) => {
          return <p onClick={() => setIndex(i)}>{tab.label}</p>;
        })}
      </div>
      <div>{tabs[index].content}</div>
    </div>
  );
}

export default TabsSwitching;
