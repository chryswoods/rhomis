
import React from "react";

import Design from "../model/Design";
import Filter from "../model/Filter";

import FilterEditor from "./FilterEditor";

import styles from "./Menu.module.css";

function Menu(props) {
  return (
    <div className={styles.panel}
      onClick = {() => { props.emitClose() }}>
      <button className={styles.button}
        onClick={() => { props.emitClose(); }}>
        Close Menu
      </button>
      <button className={styles.button}
        onClick={() => {
          let filter =
            <FilterEditor
              modules={props.modules}
              design={props.design}
              filter={props.filter}
              emitUpdate={props.emitUpdate}
              emitClose={props.emitClose}/>;
          props.emitPopup(filter);
        }}>
        Filter
      </button>
      <button className={styles.button}
        onClick={() => {
          let design = new Design();
          props.emitUpdate(design);
        }}>
        Clear Selection
      </button>
      <button className={styles.button}
        onClick={() => {
          let filter = new Filter();
          props.emitUpdate(filter);
        }}>
        Clear Filters
      </button>
    </div>);
}

export default Menu;
