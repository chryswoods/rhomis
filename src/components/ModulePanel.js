
import React from 'react';

import TopicList from "./TopicList";
import Duration from "./Duration";
import LanguageList from "./LanguageList";
import SDGList from "./SDGList";

import styles from "./ModulePanel.module.css";

function ModulePanel(props) {
  const modules = props.modules;

  if (!modules) {
    return <div>Missing modules!</div>;
  }

  const index = props.index;

  const module = modules.modules[index];

  let panel_style = styles.panel;

  if (modules.is_selected[index]) {
    panel_style = styles.selected_panel;
  }

  return (
    <div className={panel_style}>
      <div className={styles.banner}
        style={{ backgroundColor: module.category.color }}>
        <div className={styles.number}
             style={{color: module.category.color}}>
          {module.number}
        </div>
      </div>
      <div className={styles.title}>{module.name}</div>
      <img className={styles.logo} src={module.logo} alt=""/>
      <div className={styles.description}>{module.description}</div>
      <div className={styles.topics}>
        <TopicList topics={module.topics} />
      </div>
      <div className={styles.spacer} />
      <hr style={{ width: "90%", borderTop: "1px solid #782226" }}/>
      <div className={styles.footer}>
        <SDGList sdgs={module.sdgs} />
        <Duration value={module.duration} />
        <LanguageList languages={module.languages} />
      </div>
    </div>
  );
}

export default ModulePanel;
