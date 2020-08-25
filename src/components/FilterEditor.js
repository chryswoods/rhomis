
import React from "react";

import ToggleButton from "./ToggleButton";

import styles from "./FilterEditor.module.css";

class FilterEditor extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      modules: props.modules,
      filter: props.filter,
      emitUpdate: props.emitUpdate
    }
  }

  toggleFiltered(obj) {
    let filter = this.state.filter;
    filter.toggle_filtered(obj);
    this.setState({ filter: filter });
    this.state.emitUpdate(this.state.filter);
  }

  render() {
    console.log("render FilterEditor");

    let filter = this.state.filter;
    let modules = this.state.modules;
    let languages = modules.languages;

    let l = [];

    for (let i in languages) {
      let language = languages[i];
      let is_visible = filter.is_visible(language);

      console.log(`${language.code} is_visible ${is_visible}`);

      l.push(
        <ToggleButton selected={is_visible} key={language.code}
          onClick={() => {
            this.toggleFiltered(language)
          }}>
          {language.name} ({language.code})
        </ToggleButton>
      );
    }

    return (
      <div className={styles.panel}>
        <div className={styles.languages}>
          {l}
        </div>
      </div>);
  }
}

export default FilterEditor;
