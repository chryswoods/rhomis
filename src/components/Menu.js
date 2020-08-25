
import React from "react";

function Menu(props) {
    let modules = props.modules;
    let design = props.design;

    let selected = design.get_selected();

    let total_time = 0;

    for (let i in selected) {
        let module_number = selected[i];
        let module = modules.get_module(module_number);
        total_time += module.duration;
    }

    return (<div>Number selected: {selected.length}. Total time: {total_time} mins</div>)
}

export default Menu;
