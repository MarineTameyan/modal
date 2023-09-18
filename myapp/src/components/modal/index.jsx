import React from "react";
import "./modal.css";

class Modal extends React.Component {
  render() {
    if (!this.props.isOpen) return null;

    return (
      <div className="G-modal">
        <div className="modal">
          <button className="modal-close" onClick={this.props.onClose}>X</button>
          <h2>Hello, I'm a modal!</h2>
        </div>
      </div>
    );
  }
}

export default Modal;
