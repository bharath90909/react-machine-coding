import React, { useCallback, useState } from "react";

function Practice() {
  const [color, setColor] = useState(null);
  const colorGenerator = useCallback(() => {
    const colorString = "123456789ABCDEF";
    let result = "#";
    for (let i = 1; i <= 6; i++) {
      result += colorString.charAt(
        Math.floor(Math.random() * colorString.length)
      );
    }
    setColor(result);
  }, []);

  return (
    <div
      style={{
        display: "grid",
        placeItems: "center",
        backgroundColor: `${color ? color : "#fff"}`,
        width: "100vw",
        height: "100vh",
      }}
    >
      {/* <h1>{color}</h1> */}
      <button onClick={colorGenerator}>Generate</button>
    </div>
  );
}

export default Practice;
