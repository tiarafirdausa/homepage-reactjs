import React from "react";
import { TypeAnimation } from "react-type-animation";
const demoStrings = [
  "customer satisfaction",
  "business needs",
  "creative ideas",
];
export default function TypeWriter({ strings = demoStrings }) {
  return (
    <TypeAnimation
      sequence={[...strings.flatMap((element) => [element, 2000])]}
      wrapper="span"
      speed={50}
      repeat={Infinity}
    />
  );
}
