import React, { useState } from "react";

function Input({ gender, handleCheck }) {
  const [isChecked, setIsChecked] = useState(false);
  const handleGenderCheck = (e) => {
    setIsChecked(e.target.checked);
    handleCheck(gender, e.target.checked);
  };
  return (
    <label>
      <input type="checkbox" checked={isChecked} onChange={handleGenderCheck} />
      {gender}
    </label>
  );
}

export default Input;
