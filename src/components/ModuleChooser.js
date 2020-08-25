import React from 'react';

import ModulePanel from "./ModulePanel";

import Modules from "../model/Modules";
import Design from "../model/Design";

import styles from "./ModuleChooser.module.css";

function ModuleChooser(props) {
  let modules = props.modules;
  let design = props.design;
  let filter = props.filter;

  if (!modules) {
    return (<div>You must load some modules!</div>);
  }

  if (!design) {
    return (<div>You must load a design!</div>);
  }

  if (!(modules instanceof Modules)){
    console.log(modules);
    return (<div>Wrong type for modules</div>);
  }

  if (!(design instanceof Design)) {
    console.log(design);
    return (<div>Wrong type for design</div>);
  }

  let panels = [];

  for (let i = 0; i < modules.count(); ++i) {
    let module = modules.modules[i];
    if (filter.is_visible(module)) {
      panels.push(<ModulePanel modules={modules}
        design={design}
        emitUpdate={props.emitUpdate}
        index={i}
        key={i} />);
    }
  }

  return (<div className={styles.panel}>
            {panels}
          </div>);
}

export default ModuleChooser;
