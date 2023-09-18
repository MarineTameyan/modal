import React from "react";
import "./style.css";
import Modal from "../modal";

class Main extends React.Component {
  state = {
    isModalOpen: false,
  };

  openModal = () => {
    this.setState({ isModalOpen: true });
  };

  closeModal = () => {
    this.setState({ isModalOpen: false });
  };

  render() {
    return (
      <div>
        <button onClick={this.openModal}>Click the modal!</button>
        <Modal isOpen={this.state.isModalOpen} onClose={this.closeModal}></Modal>
      </div>
    );
  }
}

export default Main;
