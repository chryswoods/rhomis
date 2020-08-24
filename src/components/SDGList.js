
import React from "react";

import styles from "./SDGList.module.css";

function SDGBox(props) {
  let sdg = props.sdg;

  if (!sdg) {
    return null;
  }

  return (<div className={styles.sdg} style={{backgroundColor: sdg.color}}>
            <div className={styles.number}>{sdg.number}</div>
            <div className={styles.text}>{sdg.description}</div>
            <img className={styles.logo} src={sdg.logo} alt=""/>
          </div>);
}

function SDGList(props) {
  let sdgs = props.sdgs;

  let s = [];

  for (let i in sdgs) {
    s.push(<SDGBox sdg={sdgs[i]} key={i} />);
  }

  return (<div className={styles.panel}>
            {s}
          </div>);
}

export default SDGList;
