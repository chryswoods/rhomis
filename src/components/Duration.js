
import React from 'react';

import styles from "./Duration.module.css";

function Duration(props) {
  return (<div className={styles.duration}>{props.value}</div>);
}

export default Duration;
