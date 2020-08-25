
import React from 'react';

import styles from './OverlayBox.module.css';

function OverlayBox(props) {
  let item = this.props.item;

  let url = null;

  if (item && item.getURL){
    url = item.getURL();
  }

  if (!url){
    return (<div className={styles.container}>
              <div className={styles.centerContainer}>
                {item}
                <div>
                  <button className={styles.button}
                          onClick={this.props.emitClose}>Close</button>
                </div>
              </div>
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
