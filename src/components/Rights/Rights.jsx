import React from "react";
import classes from "./Rights.module.css";
import { SpriteSVG } from "../../assets/images/svg/Sprite";
import { wakanda } from "../../assets/images/png";

const Rights = () => {
  return (
    <div className={classes.wrapper}>
      <div className={classes.sprite}>
        <SpriteSVG />
      </div>
      <div className={classes.wakanda}>
        <img
          src={wakanda}
          alt="Marvels' Black Panther Wakanda Forever only in theater"
        />
      </div>
      <div className={classes.rights}>
        <p>Sprite Zero Sugar® | © MARVEL</p>
      </div>
    </div>
  );
};
export default Rights;
