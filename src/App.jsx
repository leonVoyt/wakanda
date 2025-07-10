import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import "./App.css";
import AnimatedTitle from "./components/AnimatedTitle/Title";
import Label from "./components/Label/Label";
import Description from "./components/Description/Description";
import Rights from "./components/Rights/Rights";
import Button from "./components/UI/Button/Button";
import LoadingPage from "./components/LoadingPage/LoadingPage";

gsap.registerPlugin(ScrollTrigger);

export default function App() {
  const [loading, setIsLoading] = useState(true);
  const heroRef = useRef(null);
  const bgRef = useRef(null);

  useEffect(() => {
    if (loading) return;

    const hero = heroRef.current;
    const bg = bgRef.current;

    let animationFrameId = null;

    const handleMouseMove = (e) => {
      if (animationFrameId) return;

      animationFrameId = requestAnimationFrame(() => {
        animationFrameId = null;

        const { width, height, left, top } = hero.getBoundingClientRect();
        const x = e.clientX - left - width / 2;
        const y = e.clientY - top - height / 2;

        const rotateY = x * 0.008;
        const rotateX = -y * 0.01;

        gsap.to(bg, {
          rotateX,
          rotateY,
          transformPerspective: 1000,
          transformOrigin: "center",
          duration: 0.2,
          ease: "power3.out",
        });
      });
    };

    hero.addEventListener("mousemove", handleMouseMove);
    return () => {
      hero.removeEventListener("mousemove", handleMouseMove);
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
    };
  }, [loading]);

  return (
    <div className="App">
      <section className="hero" ref={heroRef}>
        <div className="bg-layer" ref={bgRef}></div>
        {loading ? (
          <LoadingPage setIsLoading={setIsLoading} />
        ) : (
          <main className="main">
            <span className="btn-next">
              <Button text={"Accessible version"} />
            </span>
            <Label />
            <AnimatedTitle />
            <Description />
            <Button isAnimated />
            <Rights />
          </main>
        )}
      </section>
    </div>
  );
}
