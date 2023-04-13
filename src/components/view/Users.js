import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { Table, Button, Container  } from "react-bootstrap";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import ModalDelete from "../modals/ModalDelete";
import ModalEditUser from "../modals/ModalEditUser";
import ModalEditUserPassword  from "../modals/ModalEditUserPassword";
import ModalEditUserPremission from "../modals/ModalEditUserPremission"

const Users = () => {
  const [users, setUsers] = useState([]);
  const [editUser, setEditUser] = useState({});

  const addUser = async () => {
    const post = {
      name: editUser.name,
      login: editUser.login,
      password: editUser.password,
      active: true,
      admin: false,
      phone: editUser.phone,
      position: editUser.position,
      email: editUser.email,
    };
    await axios.post("http://localhost:8080/addUser/", post);
    getUsers();
  };

  const checkPassword = () => {};

  const getUser = (e) =>
    setEditUser((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
      [e.target.phone]: e.target.value,
      [e.target.position]: e.target.value,
      [e.target.email]: e.target.value,
      //[e.target.password]: e.target.value,
      [e.target.login]: e.target.value,
    }));

  const getUsers = async () => {
    const user = await axios.get("http://localhost:8080/");
    setUsers(user.data);
  };
;

  useEffect(() => {
    getUsers();
    // eslint-disable-next-line
  }, []);

  return (
    <Container>
      <div className="tableFontSize">
<div>
<p className="tittle">ustal plan</p>
<hr />
        <Table variant="light" striped bordered hover className="">
          
        <tbody>
          <tr>
            <td>Imię nazwisko</td>
            <td>Styczeń</td>
            <td>Luty</td>
            <td>Marzec</td>
            <td>Kwiecień</td>
            <td>Maj</td>
            <td>Lipiec</td>
            <td>Sierpień</td>
            <td>Wrzesień</td>
            <td>Pażdziernik</td>
            <td>Listopad</td>
            <td>Grudzień</td>
            </tr>
          
            {users
              .filter((use) => {
                return use.active === true;
              })
              .map((use, index) => (
                <tr key={index}>
                  <td className="tableFontSize">{use.name}</td>
           
            
                 
                </tr>
              ))}
          </tbody>
        </Table>
      
</div>


<p className="tittle">Dodaj nowego użytkownika</p>
<hr />
        <Form>
          <Row className="mb-3">
            <Form.Group as={Col} md="3">
              <Form.Label>
                <b>Imię nazwisko</b>
              </Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="Imię i nazwisko"
                name="name"
                id="name"
                value={editUser.name || ""}
                onChange={getUser}
              />
              <Form.Control.Feedback type="invalid">
                Wpisz imię nazwisko
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="3">
              <Form.Label>
                <b>Stanowisko</b>
              </Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="Stanowisko"
                name="position"
                id="position"
                value={editUser.position || ""}
                onChange={getUser}
              />
              <Form.Control.Feedback type="invalid">
                Wpisz stanowisko
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="3">
              <Form.Label>
                <b>Telefon</b>
              </Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="Telefon"
                name="phone"
                id="phone"
                value={editUser.phone || ""}
                onChange={getUser}
              />
              <Form.Control.Feedback type="invalid">
                Wpisz telefon
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="3">
              <Form.Label>
                <b>E-mail</b>
              </Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="Wpisz E-mail"
                name="email"
                id="email"
                value={editUser.email || ""}
                onChange={getUser}
              />
              <Form.Control.Feedback type="invalid">
                Wpisz email
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="3">
              <Form.Label>
                <b>Login</b>
              </Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="Login"
                name="login"
                id="login"
                value={editUser.login || ""}
                onChange={getUser}
              />
              <Form.Control.Feedback type="invalid">
                Wpisz LOGIN
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="3">
              <Form.Label>
                <b>Hasło</b>
              </Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="Hasło"
                name="password"
                id="password"
                value={editUser.password || ""}
                onChange={getUser}
              />
              <Form.Control.Feedback type="invalid">
                Wpisz hasło
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="3">
              <Form.Label>
                <b>Powtórz hasło</b>
              </Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="Powtórz hasło"
                name="reapetPassword"
                id="reapetPassword"
                value=" "
                onChange={checkPassword}
              />
              <Form.Control.Feedback type="invalid">
                Hasła nie sa takie same
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="2" className="mt-4">
              <Button type="submit" variant="success" onClick={addUser}>
                <img
                  className="imgTable "
                  src="https://img.icons8.com/windows/32/ffffff/add-user-male--v1.png"
                  alt="DODAJ"
                />
                Dodaj użytkownika
              </Button>
            </Form.Group>
          </Row>
        </Form>
      </div>
      <div className="down">
      <p className="tittle">Lista użytkowników</p>
<hr />
        <Table variant="light" striped bordered hover className="tableFontSize">
          <tbody>
            {users
              .filter((use) => {
                return use.active === true;
              })
              .map((use, index) => (
                <tr key={index}>
                  <td className="tableFontSize">{use.name}</td>
                  <td className="tableFontSize">{use.phone}</td>
                  <td className="tableFontSize">{use.email}</td>
                  <td className="tableFontSize">{use.position}</td>
                  <td className="getCenter">
                  <ModalEditUserPassword use={use} getUsers={getUsers} />
                  </td>
                  <td className="getCenter">
                  <ModalEditUserPremission use={use} getUsers={getUsers} />
                  </td> 
                  <td className="getCenter">
                    <ModalEditUser use={use} getUsers={getUsers} />
                  </td>
                  <td className="getCenter">
                    <ModalDelete post={use} getUsers={getUsers} />
                  </td>
                </tr>
              ))}
          </tbody>
        </Table>
      </div>
    </Container>
  );
};
export default Users;
