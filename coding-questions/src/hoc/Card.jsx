import React from "react";

function Card(props) {
    {console.log("Inside card")}
  return (
    <div className="card">
      <h1>{props.label}</h1>
    </div>
  );
}

export default Card;
