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

  let core_panels = [];
  let add_panels = [];

  for (let i = 0; i < modules.count(); ++i) {
    let module = modules.modules[i];
    if (filter.is_visible(module)) {
      if (module.module_type === "CORE") {
        core_panels.push(<ModulePanel modules={modules}
          design={design}
          emitUpdate={props.emitUpdate}
          index={i}
          key={i} />);
      }
      else {
        add_panels.push(<ModulePanel modules={modules}
          design={design}
          emitUpdate={props.emitUpdate}
          index={i}
          key={i} />);
      }
    }
  }

  return (
    <div className={styles.panel}>
      <div className={styles.heading}>
        Core Modules - <button className={styles.button}
          onClick={() => {
            for (let i = 0; i < modules.count(); ++i){
              let module = modules.modules[i];
              if (module.module_type === "CORE") {
                if (filter.is_visible(module)) {
                  design.set_selected(module, true);
                }
              }
            }
            props.emitUpdate(design);
          }}>Select All</button>
      </div>
      <div>
        <div className={styles.content}>
          {core_panels}
        </div>
      </div>
      <div className={styles.heading}>
        Additional Modules  - <button className={styles.button}
          onClick={() => {
            for (let i = 0; i < modules.count(); ++i){
              let module = modules.modules[i];
              if (module.module_type === "ADDITIONAL") {
                if (filter.is_visible(module)) {
                  design.set_selected(module, true);
                }
              }
            }
            props.emitUpdate(design);
          }}>Select All</button>
      </div>
      <div>
        <div className={styles.content}>
          {add_panels}
        </div>
      </div>
    </div>);
}

export default ModuleChooser;
