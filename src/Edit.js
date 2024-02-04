import React from 'react';
import Form from './Form';

const Modal = ({ isOpen, onClose, selectedbtn, selectedItem, itemid }) => {
  return (
    <div className={`modal ${isOpen ? 'open' : 'closed'}`}>
      <hr />
      <div className="modal-content">
        <span className="close" onClick={onClose}>
          &times;
        </span>
        <Form selectedbtn={selectedbtn}  itemid={itemid} />
      </div>
    </div>
  );
};

export default Modal;
