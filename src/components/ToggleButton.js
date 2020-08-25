
import React from "react";

import styles from "./ToggleButton.module.css";

function ToggleButton(props) {

  let style = styles.button;

  if (props.selected) {
    style = styles.selected_button;
  }

  return (
    <div className={style} style={props.style} onClick={props.onClick}>
      {props.children}
    </div>
  );
}

export default ToggleButton;
