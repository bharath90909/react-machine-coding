import React, { useState } from "react";
import "./Accordion.css";
import { use } from "react";
const data = Array.from({ length: 5 }, (_, i) => {
  return {
    id: i + 1,
    question: `Question ${i + 1}`,
    answer: `Answer for question ${i + 1}`,
  };
});

console.log(data);
function Accordion() {
  const [isAllOpen, setIsAllOpen] = useState(false);
  const [selected, setSelected] = useState(null);
  function handleSingleSelection(getSelectedId) {
    setSelected(getSelectedId === selected ? null : getSelectedId);
  }

  function hanldeCollapse() {
    setIsAllOpen((prev) => !prev);
    setSelected(null);
  }
  return (
    <>
      <button
        style={{
          width: "50vw",
          margin: "20px auto",
          textAlign: "center",
          border: "1px solid gray",
          display: "block",
        }}
        onClick={hanldeCollapse}
      >
        {isAllOpen ? "Close All" : "Open All"}
      </button>

      <div className="accordion-container">
        {data.map((dataItem) => {
          return (
            <div
              key={dataItem.id}
              className="accordion"
              onClick={() => handleSingleSelection(dataItem.id)}
            >
              <div className="accordion-heading">
                <h1 className="heading">{dataItem.question}</h1>
                <span>{isAllOpen || selected === dataItem.id ? "-" : "+"}</span>
              </div>
              {isAllOpen ? (
                <p className="accordion-answer">{dataItem.answer}</p>
              ) : (
                selected === dataItem.id && (
                  <p className="accordion-answer">{dataItem.answer}</p>
                )
              )}
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Accordion;
