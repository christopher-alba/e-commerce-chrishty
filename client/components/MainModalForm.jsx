import React from "react";
import { connect } from "react-redux";
import { Modal } from "semantic-ui-react";
import Fade from "react-reveal/Fade";

import Login from "./Auth/Login";
import Signup from "./Auth/Signup";

import { setModalOpen, setModalName } from "../redux/actions/modal";
import JCUXBox from "./jcux/JCUXBox";

const ModalMain = (props) => {
  close = () => {
    props.setModalOpen(false);
    props.setModalName(null);
  };

  const { open, modal } = props;
  return (
    <Modal open={open} onClose={close} closeIcon>
      <Fade>
        <Modal.Content>
          <JCUXBox paddingTop="50px" paddingBottom="50px">
            {modal === "signup" && <Signup />}
            {modal === "login" && <Login />}
          </JCUXBox>
        </Modal.Content>
      </Fade>
    </Modal>
  );
};

const mapStateToProps = (state) => {
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
