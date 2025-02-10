import React from "react";

function UserDetails({ formData, handleChange, handleStep }) {
  return (
    <div>
      <label>
        Name :
        <input
          type="text"
          name="name"
          onChange={handleChange}
          value={formData.name}
        />
         </label>
      <label htmlFor="male">
        <input
          type="radio"
          id="male"
          name="gender"
          onChange={handleChange}
          value="male"
        />
        Male
      </label>
      <label htmlFor="female">
        <input
          type="radio"
          id="female"
          name="gender"
          onChange={handleChange}
          value="female"
        />
        Female
      </label>
      <button onClick={handleStep}>Next</button>
    </div>
  );
}

export default UserDetails;
