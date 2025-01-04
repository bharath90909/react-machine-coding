import React, { useState } from "react";
import "./calci.css";
const buttonValues = [
  "C",
  "X",
  "/",
  "=",
  "7",
  "8",
  "9",
  "*",
  "4",
  "5",
  "6",
  "-",
  "1",
  "2",
  "3",
  "+",
];
function Calculator() {
  const [input, setInput] = useState("");
  const [error, setError] = useState("");

  function calculateValue() {
    try {
      const res = eval(input);
      setInput(res);
    } catch (err) {
      setInput("");
      setError(err.message);
    }
  }
  function handleClick(index) {
    setError("");
    const char = buttonValues[index];
    console.log(char);
    switch (char) {
      case "C":
        setInput("");
        break;
      case "X":
        let arr = input.split("");
        arr.pop();
        let str = arr.join("");
        console.log(str);
        setInput(str);
        break;
      case "=":
        calculateValue();
        break;
      default:
        setInput((prev) => `${prev + char}`);
    }
  }
  return (
    <>
      <div className="calci-container">
        <div className="border border-red-500">
          <input
            type="text"
            onChange={(e) => setInput(e.target.value)}
            value={error || input}
            className="input"
          />
        </div>
        <div className="buttons">
          {buttonValues.map((but, i) => (
            <button className="button" onClick={() => handleClick(i)}>
              {but}
            </button>
          ))}
        </div>
      </div>
    </>
  );
}

export default Calculator;
