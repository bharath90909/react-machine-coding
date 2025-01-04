import React, { Fragment, useState } from "react";
import { CiStar } from "react-icons/ci";
import { FaStar } from "react-icons/fa";
function StarRating() {
  const [rating, setRating] = useState(0);
  const [tempRating, setTempRating] = useState(0);

  function handleRating(rating) {
    setRating(rating);
  }
  return (
    <div className="flex flex-row justify-center items-center gap-4 w-[500px] ">
      {Array.from({ length: 5 }, (_, i) => {
        return (
          <Star
            onRate={() => handleRating(i + 1)}
            onHoverIn={() => setTempRating(i + 1)}
            onHoverOut={() => setTempRating(0)}
            fill={tempRating ? tempRating >= i + 1 : rating >= i + 1}
            rating={rating}
            tempRating={tempRating}
          ></Star>
        );
      })}
      <p>{tempRating ? tempRating : rating && rating}</p>
      {rating > 0 && <button>Add</button>}
    </div>
  );
}

function Star({ onRate, onHoverIn, onHoverOut, fill, rating, tempRating }) {
  return (
    <Fragment>
      <span
        className="star"
        onClick={onRate}
        onMouseEnter={onHoverIn}
        onMouseLeave={onHoverOut}
        style={{
          display: "block",
          padding: "20px",
          fontSize: "20px",
        }}
      >
        {fill ? <FaStar /> : <CiStar />}
      </span>
    </Fragment>
  );
}

export default StarRating;
