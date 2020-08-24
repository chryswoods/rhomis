import Dry from "json-dry";

/** A module in the system */
class Module {
  constructor(props) {
    this.state = {
      name: null,
      number: null,
      logo: null,
      category: null,
      type: null,
      description: null,
      topics: null,
      sdgs: null,
      time: null,
      languages: null,
    };
  }
}
