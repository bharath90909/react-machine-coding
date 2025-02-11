import React, { useState } from "react";
const countries = [
  "India",
  "USA",
  "America",
  "Japan",
  "China",
  "Tibet",
  "Nepal",
  "Australia",
];
function DropDown() {
  const [selectedCountry, setSelectedCountry] = useState("");
  const [length, setLength] = useState(0);
  return (
    <div>
      <label>Country:</label>
      <input
        list="countries"
        value={selectedCountry}
        onChange={(e) => setSelectedCountry(e.target.value)}
      ></input>
      {/* //place onChange on input tag only */}
      <datalist id="countries">
        {countries.map((country, index) => (
          <option key={index} value={country}>
            {country}
          </option>
        ))}
      </datalist>
      <p>Selected Country:{selectedCountry}</p>
    </div>
  );
}

export default DropDown;
