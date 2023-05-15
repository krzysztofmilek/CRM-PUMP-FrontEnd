import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import axios from "axios";
import { useState } from "react";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";

function ModalDeletePlain(props) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  const customerDelete = async () => {
    await axios.delete("http://localhost:8080/plain/delete/" + props.post._id);
    setShow(false);
    props.getData();
  };
  return (
    <div>
      <OverlayTrigger
        key="top"
        placement="top"
        overlay={<Tooltip id="tooltip-top">Usuń Klienta</Tooltip>}
      >
        <img
          className="imgTable"
          src="https://img.icons8.com/windows/64/null/remove-user-male--v1.png"
          alt="Usuń"
          onClick={() => {
            handleShow(false);
          }}
        />
      </OverlayTrigger>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Usuwanie planu użytkownika {props.post.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Czy napewno chcesz usunąć  plan {props.post.name}
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

export default ModalDeletePlain;
