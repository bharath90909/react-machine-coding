import React, { useEffect, useRef, useState } from "react";

function RandomColor() {
  const [typeOfColor, setTypeOfColor] = useState(null);
  const [color, setColor] = useState();

  function randomNumber(length) {
    return Math.floor(Math.random() * length);
  }
  function createHexColor() {
    const hexCode = "123456789ABCDEF";
    let hexColor = "#";
    for (let i = 1; i <= 6; i++) {
      hexColor += hexCode.charAt(randomNumber(hexCode.length));
    }

    setColor(hexColor);
  }

  function createRGBColor() {
    let red = randomNumber(255);
    let blue = randomNumber(255);
    let green = randomNumber(255);

    setColor(`rgb(${red},${blue},${green})`);
  }

  useEffect(() => {
    {
      typeOfColor
        ? typeOfColor === "RGB"
          ? createRGBColor()
          : createHexColor()
        : "";
    }
  }, [typeOfColor]);
  return (
    <div
      className={`container mx-auto h-screen`}
      style={{
        background: `${color}`,
      }}
    >
      <div className="flex flex-row justify-between">
        <button
          className="p-4 border border-red-200"
          onClick={() => setTypeOfColor("HEX")}
        >
          Create HEX Color
        </button>
        <button
          className="p-4 border border-red-200"
          onClick={() => setTypeOfColor("RGB")}
        >
          Create RGB Color
        </button>
        <button
          className="p-4 border border-red-200"
          onClick={typeOfColor == "HEX" ? createHexColor : createRGBColor}
        >
          {`Create Random ${
            typeOfColor !== undefined && typeOfColor !== null ? typeOfColor : ""
          } Color`}
        </button>
      </div>
      <div className="text-center h-full border border-blue-200">
        <h1> {typeOfColor}</h1>
        <h1> {color}</h1>
      </div>
    </div>
  );
}

export default RandomColor;
