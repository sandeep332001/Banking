import React from "react";
import classes from "./popup.module.scss";
const Popup = (props) => {
  return (
    <div className={`classes[popup - box]`}>
      <div className={classes.box}>
        <span className={`classes[close - icon]`} onClick={props.handleClose}>
          Hello
        </span>
      </div>
    </div>
  );
};

export default Popup;
