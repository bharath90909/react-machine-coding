import React, { useState } from "react";
const data = [
  {
    country: "India",
    cities: ["Chennai", "Mumbai", "Delhi"],
  },
  {
    country: "Pakistan",
    cities: ["Ladak", "Islamabad"],
  },
  {
    country: "USA",
    cities: ["New York", "Seattle"],
  },
];
function DropDown() {
  const [value, setValue] = useState(data[0].country);
  const [cities, setCities] = useState(data[0].cities);

  function handleChange(event) {
    setValue(event.target.value);
    setCities(
      [...data].find((data) => data.country === event.target.value).cities
    );
  }

  return (
    <div>
      <select onChange={handleChange} value={value}>
        {data.map((data) => (
          <option value={data.country}>{data.country}</option>
        ))}
      </select>
      <select>
        {cities.map((city) => (
          <option value={city}>{city}</option>
        ))}
      </select>
    </div>
  );
}

export default DropDown;
