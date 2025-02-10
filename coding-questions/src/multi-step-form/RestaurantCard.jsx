import React, { useState } from "react";
import UserDetails from "./UserDetails";
import BookingDetails from "./BookingDetails";
import BookingSummary from "./BookingSummary";
function RestaurantCard() {
  const [step, setStep] = useState(0);
  const [formData, setFormData] = useState({
    name: "",
    gender: "",
    persons: "",
    date: "",
    time: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const handleStep = () => {
    setStep((prev) => prev + 1);
  };
  return (
    <div>
      {step === 0 && <button onClick={handleStep}>Book a Table</button>}
      {step == 1 && (
        <UserDetails
          formData={formData}
          handleChange={handleChange}
          handleStep={handleStep}
        />
      )}
      {step == 2 && (
        <BookingDetails
          formData={formData}
          handleChange={handleChange}
          handleStep={handleStep}
        />
      )}
      {step == 3 && (
        <BookingSummary
          formData={formData}
          handleChange={handleChange}
          handleStep={handleStep}
        />
      )}
    </div>
  );
}

export default RestaurantCard;
