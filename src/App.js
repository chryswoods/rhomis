import React from 'react';
import Dry from "json-dry";

import ModuleChooser from "./components/ModuleChooser";
import Menu from "./components/Menu";

import Modules from "./model/Modules";
import Design from "./model/Design";

import module_data from "./modules.json";

import styles from "./App.module.css";

class App extends React.Component {
  constructor(props) {
    let modules = Dry.parse(module_data);

    if (!(modules instanceof Modules)){
      console.log("Could not parse!");
      modules = new Modules();
    }

    let design = new Design();

    super(props);

    this.state = {
      "modules": modules,
      "design": design
    };
  }

  slotUpdate(design) {
    this.setState({ design: design });
  }

  render() {
    let modules = this.state.modules;
    let design = this.state.design;

    let emitUpdate = (design) => { this.slotUpdate(design) };

    return (
      <div className={styles.wrapper}>
        <div className={styles.header}>
          <Menu modules={modules} design={design}
                emitUpdate={emitUpdate} />
        </div>
        <div className={styles.content}>
          <ModuleChooser modules={modules} design={design}
                         emitUpdate={emitUpdate} />
        </div>
        <div className={styles.footer}>Footer</div>
      </div>);
  }
};

export default App;
