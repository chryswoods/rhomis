
import React from 'react';

import styles from "./LanguageList.module.css";

function LanguageList(props) {
  let s = props.languages.join(" | ");

  return (<span className={styles.languageList}>{s}</span>);
}

export default LanguageList;
