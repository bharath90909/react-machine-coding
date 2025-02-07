import React, { useEffect, useState } from "react";
import "./scroll.css";
function ScrollIndicator() {
  const [scrollPercentage, setScrollPercentage] = useState(0);
  useEffect(() => {
    function handleScroll() {
      const scrollTop =
        document.documentElement.scrollTop || document.body.scrollTop;
      const scrollHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      const scrollPer = (scrollTop / scrollHeight) * 100;
      setScrollPercentage(scrollPer);
    }
    window.addEventListener("scroll", handleScroll);
    return () => {
      console.log("unmounted");
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div className="scrollBody">
      <div className="scroll-indicator">Scroll Indicator</div>
      <div
        className="progress-bar text-slate-900"
        style={{
          width: `${scrollPercentage}%`,
        }}
      >
        {Math.ceil(scrollPercentage) + "%"}
      </div>
    </div>
  );
}

export default ScrollIndicator;
