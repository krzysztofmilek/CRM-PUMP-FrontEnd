import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import axios from "axios";
import { useState } from "react";
import OverlayTrig from "../overLay/OverlayTrig";

function ModalDeleteCustomer(post) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const customerDelete = async () => {
    await axios.delete(
      "http://localhost:8080/customer/delete/" + post.post._id
    );
    setShow(false);
    post.getUsers();
  };
  return (
    <div>
      <OverlayTrig
        imagePath="https://img.icons8.com/windows/64/null/remove-user-male--v1.png"
        toltip="Usuń Klienta"
        onClick={(e) => {
          handleShow(false);
        }}
      />


      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Usuwanie użytkownika {post.post.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Czy napewno chcesz usunąć tego użytkownika {post.post.name}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="outline-success" onClick={handleClose}>
            Anuluj
          </Button>
          <Button variant="outline-danger" onClick={() => customerDelete()}>
            Usuń
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default ModalDeleteCustomer;
