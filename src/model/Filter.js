
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
      console.log(this._languages);

      if (this._languages === null) {
        return true;
      }
      else if (this._languages[obj.code]) {
        console.log(obj.code);
        console.log(this._languages[obj.code]);
        return true;
      }
      else{
        return false;
      }
    }
    else if (obj instanceof SDG) {
      if (this._sdgs === null) {
        return true;
      }
      else if (this._sdgs[obj.number]) {
        return true;
      }
      else {
        return false;
      }
    }
    else if (obj instanceof Category) {
      if (this._categories === null) {
        return true;
      }
      else if (this._categories[obj.name]) {
        return true;
      }
      else {
        return false;
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
        if (this._languages === null) {
          this._languages = {};
        }

        this._languages[obj.code] = 1;
      }
      else if (obj instanceof Category) {
        if (this._categories === null) {
          this._categories = {}
        }

        this._categories[obj.name] = 1;
      }
      else if (obj instanceof SDG) {
        if (this._sdgs === null) {
          this._sdgs = {};
        }

        this._sdgs[obj.number] = 1;
      }
    }
    else {

    }
  }

  toggle_filtered(obj) {
    this.set_filtered(obj, this.is_visible(obj));
    console.log(`${obj.name} visible? ${this.is_visible(obj)}`);
  }
};

export default Filter;
