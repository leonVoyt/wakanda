import { useEffect, useRef } from "react";
import gsap from "gsap";
import { TitleSVG } from "../../assets/images/svg/Title";
import classes from "./Title.module.css";

const AnimatedTitle = ({ isSmall }) => {
  const svgRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      svgRef.current,
      { scaleY: 0 },
      {
        scaleY: 1,
        transformOrigin: "center",
        duration: 1.2,
        ease: "power3.out",
      }
    );
  }, []);

  return (
    <div
      className={`${classes.wrapper} ${isSmall ? classes.smallWrapper : ""}`}
    >
      <div ref={svgRef} style={{ transform: "scaleY(1)" }}>
        <span
          className={`${classes.part1} ${isSmall ? classes.smalPart1 : ""}`}
        >
          The
        </span>
        <span
          className={`${classes.part2} ${isSmall ? classes.smallPart2 : ""}`}
        >
          Of
        </span>

        <TitleSVG />
      </div>
    </div>
  );
};
export default AnimatedTitle;
