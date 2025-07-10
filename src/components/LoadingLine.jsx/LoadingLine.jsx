import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import classes from "./LoadingLine.module.css";

const LoadingLine = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const wrapperRef = useRef(null);
  const intervalRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      wrapperRef.current,
      { opacity: 0 },
      { opacity: 1, delay: 1.2, duration: 0.6, ease: "power2.out" }
    );

    const startProgressTimeout = setTimeout(() => {
      const duration = 4000;
      const intervalTime = 50;
      const steps = duration / intervalTime;
      let current = 0;

      intervalRef.current = setInterval(() => {
        current += 1;
        const newProgress = Math.min(Math.round((current / steps) * 100), 100);
        setProgress(newProgress);
        if (newProgress >= 100) {
          clearInterval(intervalRef.current);
          onComplete?.(); // запускаем скрытие
        }
      }, intervalTime);
    }, 1500);

    return () => {
      clearTimeout(startProgressTimeout);
      clearInterval(intervalRef.current);
    };
  }, []);

  return (
    <div className={classes.wrapper} ref={wrapperRef}>
      <div className={classes.bar} style={{ width: `${progress}%` }} />
      <div className={classes.progressText} style={{ width: `${progress}%` }}>
        {progress}%
      </div>
    </div>
  );
};

export default LoadingLine;
