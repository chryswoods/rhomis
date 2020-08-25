
import Dry from "json-dry";

import Module from "./Module";

class Design {
  constructor(props) {
    if (props) {
      this._is_selected = props.is_selected;
    }

    if (!this._is_selected) {
      this._is_selected = {};
    }
  }

  _getID(module) {
    if (!(module instanceof Module)) {
      if (!module) {
        return 0;
      }
      else {
        return parseInt(module);
      }
    }
    else {
      return module.number;
    }
  }

  is_selected(module) {
    module = this._getID(module);
    if (module === 0) {
      return false;
    }
    else if (this._is_selected[module]) {
      return true;
    }
    else {
      return false;
    }
  }

  set_selected(module, selected = true) {
    module = this._getID(module);

    if (module !== 0) {
      if (selected) {
        this._is_selected[module] = true;
      }
      else {
        delete this._is_selected[module];
      }
    }
  }

  get_selected() {
    return Object.keys(this._is_selected);
  }

  toggle_selected(module) {
    this.set_selected(module, !(this.is_selected(module)));
  }

  toDry() {
    return { "is_selected": this._is_selected };
  }
};

Design.unDry = function (value) {
    let design = new Design(value);
    return design;
  }

Dry.registerClass("Design", Design);

export default Design;
