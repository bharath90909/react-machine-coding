import React, { useState } from "react";
import "./imageslider.css";
const images = [
  {
    name: "Image 1",
    url: "https://media.gettyimages.com/id/957293392/photo/die-weltmeisterin-marita-koch-unterh%C3%A4lt-sich-mit-ihrem-trainer-wolfgang-meier-w%C3%A4hrend-einer.jpg?s=612x612&w=0&k=20&c=PdOEN3ovYvrv3V-U0DmkuWXWHJYwMhIUOyh42FqAsvk=",
  },
  {
    name: "Image 2",
    url: "https://media.gettyimages.com/id/957261000/photo/die-weltmeisterin-marita-koch-ihre-freundin-silke-gladisch-und-eine-teamkollegin-unterhalten.jpg?s=612x612&w=0&k=20&c=SqL17hmxDcC8vyZOQ4BC5ui0tLIrNFSZo6gPYuhe7gk=",
  },
  {
    name: "Image 3",
    url: "https://media.gettyimages.com/id/957233892/photo/neben-dem-t%C3%A4glichen-training-geh%C3%B6ren-f%C3%BCr-die-weltmeisterin-marita-koch-das-b%C3%BCffeln-f%C3%BCrs.jpg?s=612x612&w=0&k=20&c=yU24iGiLCLTCh33hg1EcgApN6mm84B0eaqo0Wx2tbU0=",
  },
];

function ImageSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  return (
    <>
      <div className="container  text-2xl">
        {images.map((image, index) => {
          return (
            <div
              className="img-slider"
              style={{
                transform: `translate(${(index - currentIndex) * 100}%)`,
              }}
            >
              <img src={image.url} alt="" />
            </div>
          );
        })}
        <div className="buttons w-[100%] flex flex-row justify-between">
          <button
            className="prev text-green-400"
            onClick={() =>
              setCurrentIndex(currentIndex === 0 ? 2 : currentIndex - 1)
            }
          >
            Prev
          </button>
          <button
            className="next text-green-500"
            onClick={() =>
              setCurrentIndex(currentIndex === 2 ? 0 : currentIndex + 1)
            }
          >
            Next
          </button>
        </div>
      </div>
      <div className="dots flex flex-row gap-4 w-[500px] mx-auto justify-center">
        {Array.from({ length: 3 }, (_, i) => {
          return (
            <div
              className="dot"
              onClick={() => setCurrentIndex(i)}
              style={{
                width: "50px",
                height: "50px",
                background: `${currentIndex === i ? "#000" : "red"}`,
              }}
            ></div>
          );
        })}
      </div>
    </>
  );
}

export default ImageSlider;
