import React from "react";
import Modal from "react-bootstrap/Modal";
import axios from "axios";
import { useState } from "react";
import { Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";




function ModalEditUserPremission (props) {
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
      [e.target.admin]: e.target.value,
    }));

  const saveEditUser = async (use) => {
    const user = await axios.put(
      "http://localhost:8080/edit/" + props.use._id,

      {
        _id: use._id,
        admin: editUser.admin,
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
        overlay={<Tooltip id="tooltip-top">Zmień uprawnienia</Tooltip>}
      >
       <img
       className="imgTable"
      src="https://img.icons8.com/windows/32/null/users-settings.png"
       
       alt="Ustaw uprawnienia"
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
          <Form.Label>Wybierz uprawnienia dla {props.use.name} </Form.Label>
              <Form.Control
                as="select"
                name="admin"
                id="admin"
                onChange={getUser}
              ><option >Wybierz uprawnienia</option>
                <option value="false" name="admin">Użytkownik</option>
                <option value="true" name="admin">Administrator</option>
             
              </Form.Control>
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
export default ModalEditUserPremission;
