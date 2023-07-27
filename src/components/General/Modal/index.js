
import React from "react";
import style from "./style.module.scss";

const Modal = props => {
  return (
    <div className={style.popup_box}>
      <div className={style.box}>
        <span className={style.close_icon} onClick={props.handleClose}>x</span>
        {props.content}
      </div>
    </div>
  );
};

export default Modal;
