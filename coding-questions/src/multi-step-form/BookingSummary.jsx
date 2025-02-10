import React from "react";

function BookingSummary({ formData }) {
  return (
    <div>
      <p>Name :{formData.name}</p>
      <p>gender :{formData.gender}</p>
      <p>Persons :{formData.persons}</p>
      <p>date :{formData.date}</p>
      <p>time :{formData.time}</p>
    </div>
  );
}

export default BookingSummary;
