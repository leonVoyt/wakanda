import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import "./Button.css";
import { ArrowSVG } from "../../../assets/images/svg/Arrow";

const phrases = [
  "WAKANDA",
  "FOREVER",
  "WAKANDA",
  "FOREVER",
  "WAKANDA",
  "FOREVER",
  "ENTER",
];

const Button = ({ text, isAnimated = false }) => {
  const [index, setIndex] = useState(0);
  const textRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    if (!isAnimated) {
      return;
    }
    gsap.set(buttonRef.current, { opacity: 0 });

    gsap.to(buttonRef.current, {
      opacity: 1,
      duration: 0.6,
      ease: "power2.out",
      delay: 2.2,
      onComplete: () => {
        const tl = gsap.timeline();

        phrases.forEach((phrase, i) => {
          tl.to(textRef.current, {
            y: 20,
            opacity: 0,
            duration: 0.2,
            ease: "power2.out",
            onComplete: () => setIndex(i),
          });
          tl.set(textRef.current, { y: -20 });
          tl.to(textRef.current, {
            y: 0,
            opacity: 1,
            duration: 0.09,
            ease: "power2.out",
          });
        });
      },
    });
  }, []);

  return (
    <button className="custom-btn" ref={buttonRef}>
      <span className="animation-line" />
      <p className="gsap-text" ref={textRef}>
        {text || phrases[index]}
      </p>
      <span className={"custom-btn-arrow"}>
        <ArrowSVG />
      </span>
    </button>
  );
};

export default Button;
