import React, { Component } from "react";
import { connect } from "react-redux";
import { Modal } from "semantic-ui-react";
import Fade from "react-reveal/Fade";

import Login from "./Auth/Login";
import Signup from "./Auth/Signup";

import { setModalOpen, setModalName } from "../redux/actions/modal";

const ModalMain = (props) => {
  close = () => {
    this.props.setModalOpen(false);
    this.props.setModalName(null);
  };

  const { open, modal } = props;
  return (
    <Modal className="modalMainContainer" open={open} onClose={close} closeIcon>
      <Fade>
        <Modal.Content className="modalContentContainer">
          {modal === "signup" && <Signup />}
          {modal === "login" && <Login />}
        </Modal.Content>
      </Fade>
    </Modal>
  );
};

const mapStateToProps = (state) => {
  console.log(state);
  return {
    modal: state.modal.name,
    open: state.modal.open,
  };
};

const mapDispatchToProps = {
  setModalOpen,
  setModalName,
};

export default connect(mapStateToProps, mapDispatchToProps)(ModalMain);
