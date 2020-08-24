import Dry from "json-dry";

class Language {
  constructor(props) {
    this.code = props.code;
    this.name = props.name;
  }
}

Language.unDry = function (value) {
  let language = new Language(value);
  return language;
}

Dry.registerClass("Language", Language);

export default Language;
