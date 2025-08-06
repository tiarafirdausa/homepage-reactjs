import React, { useState, useRef, useEffect } from "react";

const ProgressBarComponent = ({ max }) => {
  const [counted, setCounted] = useState(0);
  const targetElement = useRef(null);

  const startCountup = () => {
    const intervalId = setInterval(() => {
      setCounted((prevCounted) => {
        const newCounted = prevCounted + 1;
        if (newCounted >= max) {
          clearInterval(intervalId);
        }
        return newCounted;
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
        viewBox="0 0 100 6"
        preserveAspectRatio="none"
        style={{ display: "block", width: `${counted}%` }}
      >
        <path d="M 0,3 L 100,3" stroke="#eee" strokeWidth="6" fillOpacity="0" />
        <path
          d="M 0,3 L 100,3"
          stroke="#555"
          strokeWidth="6"
          fillOpacity="0"
          style={{ strokeDasharray: "100, 100", strokeDashoffset: 0 }}
        />
      </svg>
      <div
        className="progressbarComponent-text"
        style={{
          color: "inherit",
          position: "absolute",
          right: "0px",
          top: "-30px",
          padding: "0px",
          margin: "0px",
        }}
      >
        {counted} %
      </div>
    </>
  );
};

export default ProgressBarComponent;
