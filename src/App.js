import React from "react";
import ReactModal from "react-modal";
import Dry from "json-dry";

import ModuleChooser from "./components/ModuleChooser";
import Menu from "./components/Menu";
import DesignSummary from "./components/DesignSummary";
import OverlayBox from "./components/OverlayBox";
import SlidingPanel from "./components/SlidingPanel";

import Modules from "./model/Modules";
import Design from "./model/Design";
import Filter from "./model/Filter";

import module_data from "./modules.json";

import styles from "./App.module.css";

class App extends React.Component {
  constructor(props) {
    let modules = Dry.parse(module_data);

    if (!(modules instanceof Modules)) {
      console.log("Could not parse!");
      modules = new Modules();
    }

    let design = new Design();
    let filter = new Filter();

    super(props);

    this.state = {
      modules: modules,
      design: design,
      filter: filter,
      popup: null,
      is_popup_open: false,
      is_menu_open: false,
    };
  }

  slotUpdate(obj) {
    if (obj instanceof Design) {
      console.log("UPDATE DESIGN");
      this.setState({ design: obj });
    } else if (obj instanceof Filter) {
      console.log("UPDATE FILTER");
      this.setState({ filter: obj });
    }
    else {
      console.log("UNRECOGNISED");
      console.log(obj);
    }
  }

  slotPopup(popup) {
    this.setState({
      popup: popup,
      is_popup_open: true,
    });
  }

  closePopup() {
    this.setState({
      popup: null,
      is_popup_open: false,
    });
  }

  render() {
    console.log("RENDER");

    let modules = this.state.modules;
    let design = this.state.design;
    let filter = this.state.filter;

    let emitUpdate = (obj) => {
      this.slotUpdate(obj);
    };
    let emitPopup = (obj) => {
      this.slotPopup(obj);
    };

    return (
      <div className={styles.wrapper}>
        <ReactModal
          isOpen={this.state.is_popup_open}
          onRequestClose={() => {
            this.closePopup();
          }}
          contentLabel="Information overlay"
          className={styles.modal}
          overlayClassName={{
            base: styles.modalOverlay,
            afterOpen: styles.modalOverlayAfterOpen,
            beforeClose: styles.modalOverlayBeforeClose,
          }}
          closeTimeoutMS={200}
          appElement={document.getElementById("root")}
        >
          <div
            className={styles.closeOverlayButton}
            onClick={() => {
              this.closePopup();
            }}
          >
            X
          </div>
          <OverlayBox
            item={this.state.popup}
            emitClose={() => {
              this.closePopup();
            }}
          />
        </ReactModal>

        <div className={styles.header}>
          <button
            className={styles.hamburgerButton}
            onClick={() => {
              this.setState({ is_menu_open: true });
            }}
          >
            ☰
          </button>
        </div>

        <SlidingPanel
          isOpen={this.state.is_menu_open}
          position="left"
          size="50%"
          maxSize="400px"
        >
          <Menu
            modules={modules}
            design={design}
            filter={filter}
            emitClose={() => {
              this.setState({ is_menu_open: false });
            }}
            emitPopup={emitPopup}
            emitUpdate={emitUpdate}
          />
        </SlidingPanel>

        <div className={styles.content}>
          <ModuleChooser
            modules={modules}
            design={design}
            filter={filter}
            emitPopup={emitPopup}
            emitUpdate={emitUpdate}
          />
        </div>

        <div className={styles.footer}>
          <DesignSummary
            modules={modules}
            design={design}
            filter={filter}
            emitUpdate={emitUpdate}
            emitPopup={emitPopup}
          />
        </div>
      </div>
    );
  }
}

export default App;
