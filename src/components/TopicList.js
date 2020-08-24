
import React from 'react';

import styles from "./TopicList.module.css";

function TopicList(props) {

  let items = [];

  for (let i in props.topics) {
    items.push(<li className={styles.topic} key={i}>{props.topics[i]}</li>);
  }

  return (<div className={styles.topics}>
            <ul>
              {items}
            </ul>
          </div>);
}

export default TopicList;
