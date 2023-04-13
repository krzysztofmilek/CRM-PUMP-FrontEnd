import React from "react";
import Modal from "react-bootstrap/Modal";
import axios from "axios";
import { useState } from "react";
import { Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";

function ModalEditUserPassowrd(props) {
  const [show, setShow] = useState(false);
  const [editUser, setEditUser] = useState({});
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const getUser = (e) =>
    setEditUser((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
      [e.target.phone]: e.target.value,
      [e.target.position]: e.target.value,
      [e.target.email]: e.target.value,
      [e.target.login]: e.target.value,
      [e.target.password]: e.target.value,
    }));

  const saveEditUser = async (use) => {
    const user = await axios.put(
      "http://localhost:8080/edit/" + props.use._id,

      {
        _id: use._id,
        password: editUser.password,
      }
    );

    setEditUser(user.data);
    setShow(false);
    console.log(editUser)
    props.getUsers();
  };

  return (
    <div>
    

<OverlayTrigger
        key="top"
        placement="top"
        overlay={<Tooltip id="tooltip-top">Zmień hasło</Tooltip>}
      >
        <img
        className="imgTable"
        src="https://img.icons8.com/external-creatype-glyph-colourcreatype/64/null/external-password-internet-security-solid-set-creatype-glyph-colourcreatype.png"
        alt='Reset Hasła'
        onClick={() => {
          handleShow(false);
        }}
      />
      </OverlayTrigger>
      
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton className="modalHeaderColor">
          <Modal.Title>Edycja hasła użytkownika {props.use.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body className="modalBodyColor">
          <Form>
            <Form.Label>
              <b>Wpisz hasło</b>
            </Form.Label>
            <Form.Control
              type="password"
              name="password"
              id="password"
              defaultValue=""
              onChange={getUser}
            />

            <Form.Label>
              <b>Wpisz ponownie hasło</b>
            </Form.Label>
            <Form.Control
              type="password"
              name="second-Password"
              id="second-Password"
              defaultValue=""
              onChange={getUser}
            />
          </Form>
        </Modal.Body>
        <Modal.Footer className="modal-footer">
          <Button variant="outline-secondary" onClick={handleClose}>
            Anuluj
          </Button>
          <Button
            type="submit"
            variant="outline-success"
            onClick={(e) => {
              saveEditUser(editUser);
            }}
          >
            Zapisz zmiany
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
export default ModalEditUserPassowrd;
