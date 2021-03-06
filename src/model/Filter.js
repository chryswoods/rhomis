
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

  clear_language_filter() {
    this._languages = null;
  }

  clear_sdg_filter() {
    this._sdgs = null;
  }

  clear_category_filter() {
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

  is_filtered(obj) {
    if (obj instanceof Language) {
      if (this._languages === null) {
        return false;
      }
      else if (this._languages[obj.code]){
        return true;
      }
      else {
        return false;
      }
    }
    else if (obj instanceof SDG) {
      if (this._sdgs === null) {
        return false;
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
        return false;
      }
      else if (this._categories[obj.name]) {
        return true;
      }
      else {
        return false;
      }
    }
    else {
      return false;
    }
  }

  is_visible(obj) {
    if (obj instanceof Language) {
      if (this._languages === null) {
        return true;
      }
      else if (this._languages[obj.code]) {
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
      let visible_language = true;

      if (this._languages !== null) {
        visible_language = this.any_visible(obj.languages);
      }

      let visible_sdg = true;

      if (this._sdgs !== null) {
        visible_language = this.any_visible(obj.sdgs);
      }

      return this.is_visible(obj.category) &&
        visible_language && visible_sdg;
    }
    else {
      return true;
    }
  }

  set_filtered(obj, filtered = true) {
    console.log(`set_filtered(${filtered})`);
    console.log(obj);
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
      if (obj instanceof Language) {
        if (this._languages === null) {
          return;
        }
        else if (this._languages[obj.code]) {
          delete this._languages[obj.code];

          if (Object.keys(this._languages).length === 0) {
            this._languages = null;
          }
        }
      }
      else if (obj instanceof SDG) {
        if (this._sdgs === null) {
          return;
        }
        else if (this._sdgs[obj.number]) {
          delete this._sdgs[obj.number];

          if (Object.keys(this._sdgs).length === 0) {
            this._sdgs = null;
          }
        }
      }
      else if (obj instanceof Category) {
        if (this._categories === null) {
          return;
        }
        else if (this._categories[obj.name]) {
          delete this._categories[obj.name];

          if (Object.keys(this._categories).length === 0) {
            this._categories = null;
          }
        }
      }
    }
  }

  toggle_filtered(obj) {
    this.set_filtered(obj, !(this.is_filtered(obj)));
  }
};

export default Filter;
