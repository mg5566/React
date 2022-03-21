import { Fragement } from "react";
import "./ErrorModal.css";

const ErrorModal = (props) => {
  return (
    <Fragement>
      <div className="backdrop" onClick={props.onClose} />
      <div className="error-modal">
        <h2>Error!</h2>
        <p>{props.children}</p>
        <div className="error-modal__actions">
          <button type="button" onClick={props.onClose}>
            Okay
          </button>
        </div>
      </div>
    </Fragement>
  );
};

export default ErrorModal;
