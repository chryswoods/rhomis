import Dry from "json-dry";

class SDG {
  constructor(props) {
    this.number = props.number;
    this.description = props.description;
    this.color = props.color;
    this.logo = props.logo;
  }
}

SDG.unDry = function (value) {
  let sdg = new SDG(value);
  return sdg;
}

Dry.registerClass("SDG", SDG);

export default SDG;
