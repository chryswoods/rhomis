
import Language from "./Language";
import Category from "./Category";
import SDG from "./SDG";
import Module from "./Module";

class Filter {
  constructor(props) {
    this._languages = null;
    this._sdgs = null;
    this._categories = null;
  }

  any_visible(objs) {
    for (let i in objs) {
      if (this.is_visible(objs[i])) {
        return true;
      }
    }

    return false;
  }

  is_visible(obj) {
    if (obj instanceof Language) {
      if (this._languages === null) {
        return true;
      }
      else {
        return this._languages[obj.code];
      }
    }
    else if (obj instanceof SDG) {
      if (this._sdgs === null) {
        return true;
      }
      else {
        return this._sdgs[obj.number];
      }
    }
    else if (obj instanceof Category) {
      if (this._categories === null) {
        return true;
      }
      else {
        return this._categories[obj.name];
      }
    }
    else if (obj instanceof Module) {
      return this.is_visible(obj.category) &&
        this.any_visible(obj.sdgs) &&
        this.any_visible(obj.languages);
    }
    else {
      return true;
    }
  }

  set_filtered(obj, filtered = true) {
    if (filtered) {
      if (obj instanceof Language) {
        let c = obj.code;
        if (this._languages === null) {
          this._languages = {c: 1};
        }
        else {
          this._languages[c] = 1;
        }
      }
      else if (obj instanceof Category) {
        let c = obj.number;
        if (this._categories === null) {
          this._categories = { c: 1 }
        }
        else {
          this._categories[c] = 1;
        }
      }
      else if (obj instanceof SDG) {
        let c = obj.number;
        if (this._sdgs === null) {
          this._sdgs = { c: 1 };
        }
        else {
          this._sdgs[c] = 1;
        }
      }
    }
    else {

    }
  }

  toggle_filtered(obj) {
    this.set_filtered(obj, this.is_visible(obj));
  }
};

export default Filter;
