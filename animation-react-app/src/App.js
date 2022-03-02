import React, { Fragment, useState } from "react";
import Transition from "react-transition-group/Transition";

import "./App.css";
import Modal from "./components/Modal/Modal";
import Backdrop from "./components/Backdrop/Backdrop";
// import List from "./components/List/List";

const transitionStyles = {
  entering: { opacity: 0 },
  entered: { opacity: 1 },
  exiting: { opacity: 0 },
  exited: { opacity: 0 },
};

const App = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [showBlock, setShowBlock] = useState(false);

  const showModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <div className="App">
      <h1>React Animations</h1>
      <button
        className="Button"
        onClick={() => setShowBlock((prevState) => !prevState)}
      >
        toggle
      </button>
      <br />
      <Transition in={showBlock} timeout={600} mountOnEnter unmountOnExit>
        {(state) => (
          <div
            style={{
              backgroundColor: "red",
              width: 100,
              height: 100,
              margin: "auto",
              transition: "opacity 1s ease-out",
              ...transitionStyles[state],
            }}
          ></div>
        )}
      </Transition>
      <Transition in={modalIsOpen} timeout={600} mountOnEnter unmountOnExit>
        {(state) => (
          <Fragment>
            <Modal show={modalIsOpen} closed={closeModal} />
            <Backdrop show={modalIsOpen} closed={closeModal} />
          </Fragment>
        )}
      </Transition>
      <button className="Button" onClick={showModal}>
        Open Modal
      </button>
      {/* <h3>Animating Lists</h3> */}
      {/* <List /> */}
    </div>
  );
};

export default App;
