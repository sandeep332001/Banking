import React from "react";
import style from "./Popup.module.scss";
const Popup = (props) => {
  const handleClick = () => {
    props.toggle();
  };

  return (
    <div>
      <div className={style.modal_content}>
        <span className={style.close} onClick={handleClick}>
          &times;{" "}
        </span>
        <p>Your money has been send.</p>
      </div>
    </div>
  );
};

export default Popup;
