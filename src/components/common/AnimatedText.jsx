import React, { useState, useEffect } from "react";

const stringsDefault = [
  "your business.",
  "your portfolio.",
  "your startup.",
  "digital marketing.",
];

const AnimatedText = ({ strings = stringsDefault }) => {
  const [currentStr, setCurrentStr] = useState(strings[0]);
  const [animatedText, setAnimatedText] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimatedText(false);
      setTimeout(() => {
        setAnimatedText(true);
      }, 200);

      setCurrentStr((prevStr) => {
        if (prevStr === strings[0]) {
          return strings[1];
        } else if (prevStr === strings[1]) {
          return strings[2];
        } else {
          return strings[0];
        }
      });
    }, 2000);

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  return (
    <>
      {" "}
      {animatedText ? (
        <span
          className={`animate__animated animate__fadeInDown`}
          style={{
            display: "inline-block",
            visibility: "visible",
          }}
        >
          {currentStr}
        </span>
      ) : (
        <span
          className={``}
          style={{
            display: "inline-block",
            visibility: "hidden",
          }}
        >
          {currentStr}
        </span>
      )}
    </>
  );
};

export default AnimatedText;
