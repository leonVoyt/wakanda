import React, { useRef } from "react";
import gsap from "gsap";
import classes from "./LoadingPage.module.css";
import Label from "../Label/Label";
import AnimatedTitle from "../AnimatedTitle/Title";
import LoadingLine from "../LoadingLine.jsx/LoadingLine";

const LoadingPage = ({ setIsLoading }) => {
  const wrapperRef = useRef(null);

  const handleComplete = () => {
    const tl = gsap.timeline({
      onComplete: () => setIsLoading(false),
    });

    tl.to(wrapperRef.current, {
      opacity: 0,
      y: -50,
      duration: 0.6,
      ease: "power2.inOut",
    });
  };

  return (
    <div className={classes.wrapper} ref={wrapperRef}>
      <Label />
      <AnimatedTitle isSmall />
      <LoadingLine onComplete={handleComplete} />
    </div>
  );
};

export default LoadingPage;
