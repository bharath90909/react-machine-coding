import React, { useEffect, useState } from "react";
import ModalComponent from "./ModalComponent";

function Modal() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  useEffect(() => {
    setTimeout(() => setIsModalOpen(true), 1000);
  }, []);
  return (
    <div className="w-full   h-[100vh] flex flex-row justify-center items-center">
      <button
        className="text-red-800 z-10 "
        onClick={() => setIsModalOpen((prev) => !prev)}
      >
        Open Model
      </button>
      {isModalOpen && (
        <ModalComponent
          isModalOpen={isModalOpen}
          setIsModalOpen={setIsModalOpen}
        />
      )}
    </div>
  );
}

export default Modal;
