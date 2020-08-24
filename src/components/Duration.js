
import React from 'react';

import styles from "./Duration.module.css";

function Duration(props) {
  return (<span className={styles.duration}>props.value</span>);
}

export default Duration;
