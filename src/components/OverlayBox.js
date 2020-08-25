
import React from 'react';

import styles from './OverlayBox.module.css';

function OverlayBox(props) {
  let item = props.item;

  if (!item) {
    return null;
  }

  let url = null;

  if (item && item.getURL){
    url = item.getURL();
  }

  if (!url){
    return (
      <div className={styles.container}>
        <div className={styles.content}>
         {item}
        </div>
        <button className={styles.close_button}
          onClick={() => { props.emitClose(); }}>
          Close
        </button>
      </div>);
  }

  return (
    <div className={styles.container}>
      <div className={styles.url}>{url}</div>
        <iframe
          src={url}
          title={url}
          width="100%"
          height="95%"
          frameBorder="0"
          marginHeight="0"
          marginWidth="0"
          sandbox="allow-scripts"
          position="absolute"
        />
    </div>
  );
}

export default OverlayBox;
