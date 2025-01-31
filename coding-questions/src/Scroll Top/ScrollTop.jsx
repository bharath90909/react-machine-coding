import React from "react";

function ScrollTop() {
  const handleScrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  const handleScrollDown = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    });
  };
  return (
    <div className="h-[200vh] bg-red-400 relative">
      <button className="absolute bottom-0 right-2" onClick={handleScrollTop}>
        Scroll Top
      </button>
      <button className="absolute top-0 right-2" onClick={handleScrollDown}>
        Scroll Down
      </button>
    </div>
  );
}

export default ScrollTop;
