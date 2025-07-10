import React from "react";
import { wakanda } from "../../assets/images/png";
import { SpriteSVG } from "../../assets/images/svg/Sprite";
import classes from "./Label.module.css";

const Label = ({ height = 48 }) => {
  return (
    <div className={classes.wrapper} style={{ height }}>
      <div className={classes.sprite}>
        <SpriteSVG />
      </div>
      <span className={classes.xel}>X</span>
      <div className={classes.wakanda}>
        <img
          src={wakanda}
          alt="Marvels' Black Panther Wakanda Forever only in theater"
        />
      </div>
    </div>
  );
};
export default Label;
