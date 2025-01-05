import React, { useEffect, useRef } from "react";

function ModalComponent({ isModalOpen, setIsModalOpen }) {
  const modal = useRef();
  useEffect(() => {
    window.addEventListener("click", (e) => {
      if (e.target === modal.current) {
        setIsModalOpen(!isModalOpen);
      }
    });
  }, []);
  return (
    <div
      ref={modal}
      className="fixed z-50 top-0 w-full h-full  bg-blue-700 flex flex-row justify-center items-center"
    >
      <div className="bg-green-50 text-center relative w-[500px]">
        <h1>Modal Heading</h1>
        <span
          className="absolute top-5 right-5 text-2xl"
          onClick={() => setIsModalOpen(!isModalOpen)}
        >
          X
        </span>
        <footer>Modal Footer</footer>
      </div>
    </div>
  );
}

export default ModalComponent;
