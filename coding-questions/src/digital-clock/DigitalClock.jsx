import React, { useEffect, useState } from "react";

function DigitalClock() {
  const [time, setTime] = useState(new Date());
  const getTime = () => {
    const hrs = time.getHours().toString();
    const mins = time.getMinutes().toString();
    const secs = time.getSeconds().toString();

    return `${hrs.padStart(2, "0")}:${mins.padStart(2, "0")}:${secs.padStart(
      2,
      "0"
    )}`;
  };
  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, [time]);
  return (
    <>
      <div>DigitalClock</div>
      <p>{getTime()}</p>
    </>
  );
}

export default DigitalClock;
