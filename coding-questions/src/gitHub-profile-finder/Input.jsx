import React from "react";

function Input({ input, setInput, setSearch }) {
  return (
    <input
      className="bg-slate-400"
      type="text"
      value={input}
      onChange={(e) => {
        setInput(e.target.value);
        setSearch(false);
      }}
    ></input>
  );
}

export default Input;
