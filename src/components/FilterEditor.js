
import React from "react";

import ToggleButton from "./ToggleButton";

import Filter from "../model/Filter";

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

  slotUpdate(obj) {
    if (obj instanceof Filter) {
      this.setState({ filter: obj });
    }

    if (this.state.emitUpdate) {
      this.state.emitUpdate(obj);
    }
  }

  render() {
    let filter = this.state.filter;
    let modules = this.state.modules;

    let l = [];
    for (let i in modules.languages) {
      let language = modules.languages[i];
      let is_visible = filter.is_visible(language);

      l.push(
        <ToggleButton selected={is_visible} key={language.code}
          onClick={() => {
            filter.toggle_filtered(language);
            this.slotUpdate(filter);
          }}>
          {language.name} ({language.code})
        </ToggleButton>
      );
    }

    let c = [];
    for (let i in modules.categories) {
      let category = modules.categories[i];
      let is_visible = filter.is_visible(category);

      c.push(
        <ToggleButton selected={is_visible} key={i}
          style={{ backgroundColor: category.color }}
          onClick={() => {
            filter.toggle_filtered(category);
            this.slotUpdate(filter);
          }}>
          {category.name}
        </ToggleButton>
      );
    }

    let s = [];
    for (let i in modules.sdgs) {
      let sdg = modules.sdgs[i];
      let is_visible = filter.is_visible(sdg);

      s.push(
        <ToggleButton selected={is_visible} key={i}
          style={{ backgroundColor: sdg.color }}
          onClick={() => {
            filter.toggle_filtered(sdg);
            this.slotUpdate(filter);
          }}>
          {sdg.number}: {sdg.description}
        </ToggleButton>
      );
    }

    return (
      <div className={styles.panel}>
        <div className={styles.panel}>
          <div className={styles.heading}>
            Categories
          </div>
          <div className={styles.buttons}>
            {c}
          </div>
          <button
            className={styles.reset_button} href="#"
            onClick={() => {
              filter.clear_category_filter();
              this.slotUpdate(filter);
            }}>
            Clear
          </button>
        </div>

        <div className={styles.panel}>
          <div className={styles.heading}>
            SDGs
          </div>
          <div className={styles.buttons}>
            {s}
          </div>
          <button
            className={styles.reset_button} href="#"
            onClick={() => {
              filter.clear_sdg_filter();
              this.slotUpdate(filter);
            }}>
            Clear
          </button>
        </div>

        <div className={styles.panel}>
          <div className={styles.heading}>
            Languages
          </div>
          <div className={styles.buttons}>
            {l}
          </div>
          <button
            className={styles.reset_button} href="#"
            onClick={() => {
              filter.clear_language_filter();
              this.slotUpdate(filter);
            }}>
            Clear
          </button>
        </div>
      </div>);
  }
}

export default FilterEditor;
