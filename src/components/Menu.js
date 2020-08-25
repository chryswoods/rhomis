
import React from "react";

import styles from "./Menu.module.css";

function Menu(props) {
  return (
    <div className={styles.panel}
      onClick = {() => { props.emitClose() }}>
      <button className={styles.button}
        onClick={() => { props.emitPopup((<div>Popup</div>)) }}>
        Popup
      </button>
      <button className={styles.button}
        onClick={() => { props.emitClose(); }}>
        Close Menu
      </button>
    </div>);
}

export default Menu;
