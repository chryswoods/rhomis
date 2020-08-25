
import React from "react";

import styles from "./DesignSummary.module.css";

function DesignSummary(props) {
    let modules = props.modules;
    let design = props.design;

    let selected = design.get_selected();

    if (selected.length === 0) {
        return null;
    }

    let total_time = 0;

    for (let i in selected) {
        let module_number = selected[i];
        let module = modules.get_module(module_number);
        total_time += module.duration;
    }

    let bgcolor = null;

    if (total_time > 45) {
        bgcolor = "red";
    }
    else if (total_time > 30) {
        bgcolor = "orange";
    }

    return (
        <div className={styles.panel}>
            <div className={styles.number_panel}>
                Number selected: {selected.length}
            </div>
            <div className={styles.duration_panel}
                 style={{backgroundColor: bgcolor}}>
                Total time: {total_time} mins
            </div>
        </div>);
}

export default DesignSummary;
