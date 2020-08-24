import React from 'react';

import ModulePanel from "./ModulePanel";

import styles from "./ModuleChooser.module.css";

class ModuleChooser extends React.Component {
  constructor(props) {
    super(props);
    this.state = { "modules": props.modules };
  }

  render() {

    let panels = [];

    for (let i in this.state.modules.modules) {
      panels.push(<ModulePanel modules={this.state.modules}
                               index={i}
                               key={i}/>);
    }

    return (<div className={styles.panel}>
              {panels}
            </div>);
  }

};

export default ModuleChooser;
