import Dry from "json-dry";

import "./Module";
import "./Category";
import "./Language";
import "./SDG";

class Modules{
  constructor(props) {
    this.modules = props.modules;
    this.categories = props.categories;
    this.languages = props.languages;
    this.sdgs = props.sdgs;

    this._name_to_category = {};
    this._number_to_sdg = {};
    this._code_to_language = {};

    for (let i in this.categories) {
      this._name_to_category[this.categories[i].name] = i;
    }

    for (let i in this.sdgs) {
      this._number_to_sdg[this.sdgs[i].number] = i;
    }

    for (let i in this.languages) {
      this._code_to_language[this.languages[i].code] = i;
    }

    for (let i in this.modules) {
      let module = this.modules[i];

      module.category = this.categories[this._name_to_category[module.category]];

      let sdgs = [];

      for (let j in module.sdgs) {
        sdgs.push(this.sdgs[this._number_to_sdg[module.sdgs[j]]]);
      }

      module.sdgs = sdgs;

      let languages = [];

      for (let j in module.languages) {
        languages.push(this.languages[
          this._code_to_language[module.languages[j]]]);
      }

      module.languages = languages;
    }
  }

  count() {
    return this.modules.length;
  }

  at(i) {
    return this.modules[i];
  }
}

Modules.unDry = function (value) {
  let modules = new Modules(value);
  return modules;
}

Dry.registerClass("Modules", Modules);

export default Modules;
