import React from "react";
import classes from "./Description.module.css";

const animateWords = (text, delayStart = 0) =>
  text.split(" ").map((word, i) => (
    <span
      key={i}
      className={classes.word}
      style={{ animationDelay: `${delayStart + i * 0.2}s` }}
    >
      {word}&nbsp;
    </span>
  ));

const Description = () => {
  return (
    <div className={classes.textMain}>
      <p>{animateWords("Explore new path.", 1)}</p>
      <p>{animateWords("Find your gift.", 1.6)}</p>
    </div>
  );
};

export default Description;
