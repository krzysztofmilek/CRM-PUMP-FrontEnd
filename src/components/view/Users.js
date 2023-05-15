import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { Table, Button, Container } from "react-bootstrap";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import ModalDelete from "../modals/ModalDelete";
import ModalEditUser from "../modals/ModalEditUser";
import ModalEditUserPassword from "../modals/ModalEditUserPassword";
import ModalEditUserPremission from "../modals/ModalEditUserPremission";
import Menu from "./Menu";
import UserTable from "./UserTable";
import "../css/Users.css";
import Footer from "./Footer";
import AddLeadFromExcel from "./AddLeadFromExcel";


const Users = () => {
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState({});



  const addUser = async () => {
    const post = {
      name: user.name,
      password: user.password,
      active: true,
      admin: false,
      phone: user.phone,
      position: user.position,
      email: user.email,
    };

    await axios.post("http://localhost:8080/addUser/", post);

    const plain = {
      name: user.name,
      id_user: user._id,
      january: 0,
      february: 0,
      march: 0,
      april: 0,
      may: 0,
      june: 0,
      july: 0,
      august: 0,
      september: 0,
      october: 0,
      november: 0,
      december: 0,
    };

    await axios.post("http://localhost:8080/plain//add", plain);

    getUsers();

   
  };

  const getUser = (e) =>
    setUser((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
      [e.target.phone]: e.target.value,
      [e.target.position]: e.target.value,
      [e.target.email]: e.target.value,
      [e.target.password]: e.target.value,
      // [e.target.confirmPassword]: e.target.value,
    }));

  const getUsers = async () => {
    const viewUsers = await axios.get("http://localhost:8080/allUsers");
    setUsers(viewUsers.data);
  };

  useEffect(() => {
    getUsers();

    // eslint-disable-next-line
  }, []);

  return (
    <Container>
      <Menu />
      <div className="tableFontSize">
        <div className="hiddenMobile">
          <p className="tittle">ustal plan</p>
          <hr />

          <UserTable getUsers={getUsers} />
        </div>

        <p className="tittle">Dodaj nowego użytkownika</p>
        <hr />
        <Form>
          <Row className="mb-3">
            <Form.Group as={Col} md="4">
              <Form.Label>
                <b>Imię nazwisko</b>
              </Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="Imię i nazwisko"
                name="name"
                id="name"
                value={user.name || ""}
                onChange={getUser}
              />
              <Form.Control.Feedback type="invalid">
                Wpisz imię nazwisko
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4">
              <Form.Label>
                <b>Stanowisko</b>
              </Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="Stanowisko"
                name="position"
                id="position"
                value={user.position || ""}
                onChange={getUser}
              />
              <Form.Control.Feedback type="invalid">
                Wpisz stanowisko
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4">
              <Form.Label>
                <b>Telefon</b>
              </Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="Telefon"
                name="phone"
                id="phone"
                value={user.phone || ""}
                onChange={getUser}
              />
              <Form.Control.Feedback type="invalid">
                Wpisz telefon
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4">
              <Form.Label>
                <b>E-mail</b>
              </Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="Wpisz E-mail"
                name="email"
                id="email"
                value={user.email || ""}
                onChange={getUser}
              />
              <Form.Control.Feedback type="invalid">
                Wpisz email
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group as={Col} md="4">
              <Form.Label>
                <b>Hasło</b>
              </Form.Label>
              <Form.Control
                required
                type="password"
                placeholder="Hasło"
                name="password"
                id="password"
                value={user.password || ""}
                onChange={getUser}
              />
              <Form.Control.Feedback type="invalid">
                Wpisz hasło
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4">
              <Form.Label>
                <b>Powtórz hasło</b>
              </Form.Label>
              <Form.Control
                required
                type="password"
                placeholder="Hasło"
                name="confirmPassword"
                id="confirmPassword"
                value={user.confirmPassword || ""}
                onChange={getUser}
              />
              <Form.Control.Feedback type="invalid">
                Hasła nie sa takie same confirmPassword
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="12" className="mt-4">
              <p className="getRight">
                <Button
                  type="submit"
                  variant="outline-success"
                  onClick={addUser}
                >
                  Dodaj użytkownika
                </Button>
              </p>
            </Form.Group>
          </Row>
        </Form>
      </div>
      <div>
        <AddLeadFromExcel />
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
      <Footer />
    </Container>
  );
};
export default Users;
