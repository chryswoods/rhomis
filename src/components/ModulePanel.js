
import React from 'react';

import TopicList from "./TopicList";
import Duration from "./Duration";
import LanguageList from "./LanguageList";

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

  console.log(module);

  return (
    <div className={panel_style}>
      <div className={styles.banner} style={{backgroundColor: module.category.color}}/>
      <div className={styles.number}>{module.number}</div>
      <div className={styles.title}>{module.name}</div>
      <div className={styles.logo}>{module.logo}</div>
      <div className={styles.description}>{module.description}</div>
      <hr/>
      <TopicList topics={module.topics} />
      <Duration value={module.duration} />
      <LanguageList topics={module.languages} />
    </div>
  );
}

export default ModulePanel;
