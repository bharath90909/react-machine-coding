import React, { forwardRef } from "react";

const Input = forwardRef(({ handleInput, handleKeyUp, value, index }, ref) => {
  const handleOnChange = (e) => {
    handleInput(e, index);
  };
  console.log("render");
  const handleOnKeyUp = (e) => {
    handleKeyUp(e, index);
  };

  return (
    <input
      className="input"
      type="text"
      ref={ref}
      maxLength="1"
      value={value}
      onChange={handleOnChange}
      onKeyUp={handleOnKeyUp}
    />
  );
});

export default React.memo(Input);
