
import React from 'react';

import styles from "./LanguageList.module.css";

function LanguageList(props) {

  let s = [];

  for (let i in props.languages) {
    s.push(props.languages[i].code);
  }

  s = s.join(" | ");

  return (<span className={styles.languageList}>{s}</span>);
}

export default LanguageList;
