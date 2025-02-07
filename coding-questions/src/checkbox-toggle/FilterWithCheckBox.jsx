import React, { useEffect, useState } from "react";
const data = Array.from({ length: 10 }, (_, i) => {
  return {
    id: i + 1,
    gender: ["male", "female"][Math.floor(Math.random() * 2)],
    //or
    //gender:Math.floor(Math.random() * 2)<0.5?"male","female"
  };
});
function FilterWithCheckBox() {
  const [filteredGenders, setFilteredGenders] = useState([]);
  const [input, setInput] = useState({
    male: false,
    gender: false,
  });

  const handleGenderCheck = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.checked,
    });
  };
  const checkedGenders = Object.keys(input).filter((key) => input[key]);
  console.log(checkedGenders);

  function filterGenders() {
    const filteredGenders = [...data].filter((personGender) =>
      checkedGenders.includes(personGender.gender)
    );

    setFilteredGenders((prev) => {
      return filteredGenders.length > 0 ? filteredGenders : data;
    });
  }
  useEffect(() => {
    filterGenders();
  }, [input]);
  return (
    <div>
      <label>
        <input type="checkbox" name="male" onChange={handleGenderCheck} />
        Male
      </label>
      <label>
        <input type="checkbox" name="female" onChange={handleGenderCheck} />
        Female
      </label>

      <div>
        {filteredGenders.length > 0 &&
          filteredGenders.map((person) => <li>{person.gender}</li>)}
      </div>
    </div>
  );
}

export default FilterWithCheckBox;
