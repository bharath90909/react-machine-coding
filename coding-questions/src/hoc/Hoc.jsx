import React, { useEffect, useState } from "react";
import Card from "./Card";
// import "./hoc.css";
import withPromotedLabel from "./withPromotedLabel";
import withLoading from "./withLoading";

const data = Array.from({ length: 10 }, (_, i) => {
  return {
    label: `Card ${i + 1}`,
    isPromoted: Math.random().toFixed(2) > 0.5 ? true : false,
  };
});
console.log(data);
// const PromotedCard = withPromotedLabel(Card);
const LoadingComponent = withLoading(Card);
function Hoc() {
  // return (
  //   <div className="cards-container">
  //     {data.map((card, idx) => {
  //       return card.isPromoted ? (
  //         <PromotedCard {...card} key={idx} />
  //       ) : (
  //         <Card {...card} key={idx} />
  //       );
  //     })}
  //   </div>
  // );
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);
  return <LoadingComponent isLoading={isLoading} label={"This is card"} />;
}

export default Hoc;
