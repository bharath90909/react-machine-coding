import React from "react";

function BookingDetails({ formData, handleChange, handleStep }) {
  return (
    <div>
      <label>
        Persons:
        <input
          type="number"
          name="persons"
          value={formData.persons}
          onChange={handleChange}
        />
      </label>
      <label>
        Date:
        <input
          type="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
        />
      </label>
      <label>
        Time:
        <input
          type="time"
          name="time"
          value={formData.time}
          onChange={handleChange}
        />
      </label>
      <button onClick={handleStep}>Next</button>
    </div>
  );
}

export default BookingDetails;
