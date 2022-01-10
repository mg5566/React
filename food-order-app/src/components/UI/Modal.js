import { Fragment } from "react";
import ReactDOM from "react-dom";

import styles from "./Modal.module.css";

const BackDrop = (props) => {
  return <div className={styles.backdrop}>{props.children}</div>;
};

const ModalOverlay = (props) => {
  return (
    <div className={styles.modal}>
      <div className={styles.content}>{props.children}</div>
    </div>
  );
};

const portalEelement = document.getElementById("overlays");

const Modal = (props) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(<BackDrop />, portalEelement)}
      {ReactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        portalEelement
      )}
    </Fragment>
  );
};

export default Modal;
