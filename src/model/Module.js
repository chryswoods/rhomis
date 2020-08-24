import Dry from "json-dry";

class Module {
  constructor(props) {
    this.name = props.name;
    this.number = props.number;
    this.logo = props.logo;
    this.category = props.category;
    this.module_type = props.module_type;
    this.description = props.description;
    this.topics = props.topics;
    this.sdgs = props.sdgs;
    this.duration = props.duration;
    this.languages = props.languages;
  }
}

Module.unDry = function (value) {
  let module = new Module(value);
  return module;
}

Dry.registerClass("Module", Module);

export default Module;
