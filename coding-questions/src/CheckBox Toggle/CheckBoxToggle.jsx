import React, { useMemo, useState } from "react";
import Input from "./Input";

function CheckBoxToggle() {
  //this code is just for displaying what labels are checked
  //FilterWithChecKBox.jsx is the extenion for this
  const [input, setInput] = useState({
    male: false,
    female: false,
  });

  function handleGenderChecks(gender, isChecked) {
    setInput({
      ...input,
      [gender]: isChecked,
    });
  }

  const checkedGenders = useMemo(
    () => Object.keys(input).filter((key) => input[key]),
    [input]
  );
  return (
    <div>
      <Input gender={"male"} handleCheck={handleGenderChecks} />
      <Input gender={"female"} handleCheck={handleGenderChecks} />
      <h1>
        {checkedGenders.length > 0 ? "Checked Genders" : "No Checked Genders"}
      </h1>
      {checkedGenders.length > 0 &&
        checkedGenders.map((gender) => <p>{gender}</p>)}
    </div>
  );
}

export default CheckBoxToggle;
