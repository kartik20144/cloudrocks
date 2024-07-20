import React, { useEffect, useState } from "react";
import axios from "axios";
import "./TipsSlider.css";
import gold from "./gold.png";
import stock from "./stock.jpg";
import real from "./real.jpeg";
import crypto from "./crypto.jpeg";

const Tips = () => {
  const [tipData, setTipData] = useState([]);
  const [currentTip, setCurrentTip] = useState(0);

  useEffect(() => {
    const fetchTips = async () => {
      try {
        const { data } = await axios.get("/api/tip");
        setTipData(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchTips();
  }, []);

  const handleNext = () => {
    setCurrentTip((currentTip + 1) % tipData.length);
  };

  const handleDotClick = (index) => {
    setCurrentTip(index);
  };

  if (tipData.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <div className="tips-slider-container ">
      <h2 className="font-bold text-xl text-left m-4 p-3">Tips</h2>
      <div className="tip-box bg-gray-200 my-1">
        <div className="flex justify-between my-3">
          <h3 className="text-left">{tipData[currentTip].tip}</h3>

          {currentTip == 0 ? (
            <img src={gold} alt={`Tip ${currentTip}`} />
          ) : currentTip == 1 ? (
            <img src={stock} alt={`Tip ${currentTip}`} />
          ) : currentTip == 2 ? (
            <img src={real} alt={`Tip ${currentTip}`} />
          ) : (
            <img src={crypto} alt={`Tip ${currentTip}`} />
          )}
        </div>
        <p className="text-left">{tipData[currentTip].description}</p>
        <div className="navigation"></div>
      </div>
      <div className="navigation py-2">
        {tipData.map((tip, index) => (
          <span
            key={index}
            className={`dot ${index === currentTip ? "active" : ""}`}
            onClick={() => handleDotClick(index)}
          ></span>
        ))}
        <span className="next text-black" onClick={handleNext}>
          Next
        </span>
      </div>
    </div>
  );
};

export default Tips;
