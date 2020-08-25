
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
    if (module == 0) {
      return false;
    }
    else {
      return this._is_selected[module.number];
    }
  }

  setSelected(module, selected = true) {
    module = this._getID(module);

    if (module != 0) {
      if (selected) {
        this._is_selected[module] = true;
      }
      else if (this._is_selected[module]){
        delete this._is_selected[module];
      }
    }
  }

  toggleSelected(module) {
    this.setSelected(!(this.isSelected(module)));
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
