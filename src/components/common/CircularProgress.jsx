import React, { useState, useEffect, useRef } from "react";

const ProgressCircle = ({ max }) => {
  const [countedNumber, setCountedNumber] = useState(0);
  const targetElement = useRef(null);

  const startCountup = () => {
    const intervalId = setInterval(() => {
      setCountedNumber((prev) => {
        if (prev >= max) {
          clearInterval(intervalId);
          return prev;
        }
        return prev + 1;
      });
    }, 2000 / max);
  };

  useEffect(() => {
    const handleIntersection = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          startCountup();
          observer.unobserve(entry.target);
        }
      });
    };

    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5,
    };

    const observer = new IntersectionObserver(handleIntersection, options);
    if (targetElement.current) {
      observer.observe(targetElement.current);
    }

    return () => {
      if (targetElement.current) {
        observer.unobserve(targetElement.current);
      }
    };
  }, [max]);

  return (
    <>
      <svg
        ref={targetElement}
        viewBox="0 0 100 50"
        style={{ display: "block", width: "100%" }}
      >
        <path
          d="M 50,50 m -47,0 a 47,47 0 1 1 94,0"
          stroke="#eee"
          strokeWidth="6"
          fillOpacity="0"
        />
        <path
          d="M 50,50 m -47,0 a 47,47 0 1 1 94,0"
          stroke="#555"
          strokeWidth="6"
          fillOpacity="0"
          style={{
            strokeDasharray: "147.708, 147.708",
            strokeDashoffset: 147.708 - (countedNumber * 147.708) / 100,
          }}
        />
      </svg>
      <div
        className="progressbar-text"
        style={{
          position: "absolute",
          left: "50%",
          top: "auto",
          padding: "0px",
          margin: "0px",
          transform: "translate(-50%, 0px)",
          color: "rgb(85, 85, 85)",
          bottom: "0px",
        }}
      >
        {countedNumber}
      </div>
    </>
  );
};

export default ProgressCircle;
