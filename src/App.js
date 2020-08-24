import React from 'react';
import Dry from "json-dry";

import ModuleChooser from "./components/ModuleChooser";

import Modules from "./model/Modules";

import module_data from "./modules.json";

function App() {

  let modules = Dry.parse(module_data);

  if (!(modules instanceof Modules)){
    console.log("Could not parse!");
    modules = new Modules();
  }

  return (<ModuleChooser modules={modules}/>);
}

export default App;
