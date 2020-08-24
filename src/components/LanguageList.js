
import React from 'react';

import styles from "./LanguageList.module.css";

function LanguageList(props) {

  let s = [];

  for (let i in props.languages) {
    let lang = props.languages[i];
    s.push(<div className={styles.language} key={lang.code}>
             <div className={styles.code}>{lang.code}</div>
             <div className={styles.popover}>{lang.name}</div>
           </div>);
  }

  return (<div className={styles.languageList}>{s}</div>);
}

export default LanguageList;
