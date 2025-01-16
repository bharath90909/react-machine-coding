import { use, useEffect, useRef } from "react";
import { useState } from "react";

export default function Input({ handleAddTask, value, index }) {
  console.log("rendered");
  const [input, setInput] = useState(value);
  useEffect(() => {
    console.log("effect rendered");
    setInput(value);
  }, [value]);
  return (
    <div>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      ></input>
      <button
        onClick={(e) => {
          handleAddTask(input, index);
        }}
      >
        Add Task
      </button>
    </div>
  );
}
