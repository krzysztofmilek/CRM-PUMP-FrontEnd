import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import { Form, Row, Col, InputGroup, Button } from "react-bootstrap";
import { Container } from "react-bootstrap";
import AnaliticUserTop from "./AnaliticUserTop";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
import Menu from "./Menu";
import "../css/TableCustomers.css";
import Footer from "./Footer";
import axios from "axios";

const TableCustomers = (props) => {
  const [cust, setCust] = useState({});
  const [show, setShow] = useState("hidden");
  const [actions, setActions] = useState([]);

  const getAction = (act) => {
    setCust(act);
    if (show === "show") {
      setShow("hidden");
    } else {
      setShow("show");
    }
  };

  const getAct = async () => {
    const getAction = await axios.get("http://localhost:8080/action/");
    setActions(getAction.data);
  };
  const start = new Date().toISOString().substring(0, 10);

  useEffect(() => {
    getAct();
    // eslint-disable-next-line
  }, []);

  return (
    <Container>
      <Menu />

      <div className="up">
        <AnaliticUserTop />
      </div>
      <div className="down ">
        <span className={show}>
          <div>
            <p className="title">Przeglądaj zadania</p>
            <hr />
            <Form className="getLeft">
              <Row className="mb-3">
                <Form.Group as={Col} md="4">
                  <Form.Label className="textCustomer">
                    Imię nazwisko osoby kontaktowej
                  </Form.Label>
                  <Form.Control
                    required
                    type="text"
                    placeholder="imię i nazwisko"
                    name="name"
                    id="name"
                    value={cust.name}
                  />
                </Form.Group>
                <Form.Group as={Col} md="4">
                  <Form.Label className="textCustomer">Nazwa firmy </Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Nazwa firmy"
                    name="nameCompany"
                    id="nameCompany"
                    value={cust.nameCompany}
                  />
                </Form.Group>
                <Form.Group as={Col} md="4">
                  <Form.Label className="textCustomer">NIP</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="NIP"
                    name="NIP"
                    id="NIP"
                    value={cust.NIP}
                  />
                </Form.Group>
              </Row>
              <Row className="mb-3">
                <Form.Group as={Col} md="4">
                  <Form.Label className="textCustomer">Telefon</Form.Label>
                  <Form.Control
                    required
                    type="text"
                    placeholder="Telefon"
                    name="phone"
                    id="phone"
                    value={cust.phone}
                  />
                </Form.Group>
                <Form.Group as={Col} md="4">
                  <Form.Label className="textCustomer">Adres e-mail</Form.Label>
                  <InputGroup hasValidation>
                    <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
                    <Form.Control
                      type="text"
                      placeholder="Adres e-mail"
                      aria-describedby="inputGroupPrepend"
                      name="email"
                      id="email"
                      value={cust.email}
                    />
                  </InputGroup>
                </Form.Group>
              </Row>

              <Row className="mb-1">
                <Form.Group as={Col} md="6"></Form.Group>

                <Form.Group as={Col} md="2" className="taskButtons">
                  <Button variant="outline-success">Zapisz</Button>
                </Form.Group>
                <Form.Group as={Col} md="2" className="taskButtons">
                  <Button variant="outline-success">Dalej</Button>
                </Form.Group>

                <Form.Group as={Col} md="1"></Form.Group>
                <Form.Group as={Col} md="1" className="taskButtonsRightMobile">
                  <OverlayTrigger
                    key="top"
                    placement="top"
                    overlay={
                      <Tooltip id="tooltip-top">Zamknij okno zadania</Tooltip>
                    }
                  >
                    <img
                      className="imgTable"
                      src="https://img.icons8.com/cotton/64/null/cancel--v2.png"
                      alt="Szczegóły"
                      onClick={(e) => {
                        getAction(cust);
                      }}
                    />
                  </OverlayTrigger>
                </Form.Group>
              </Row>
            </Form>
          </div>
        </span>
        <hr />

        <p className="getLeft">PRZETERMINOWANE ZADANIA </p>

        <Table variant="light" hover bordered size="sm">
          <tbody>
            {actions
              .filter((act) => {
                return act.nextContactData.slice(0, 10) < start;
              })
              .map((act, index) => (
                <tr className="red" key={index}>
                  <td className="col-3 tableFontSize">
                    {act.nextContactData.slice(0, 10)}
                  </td>
                  <td className="col-2 tableFontSize">{act.user}</td>
                  <td className="col-2 tableFontSize">{act.customer.name}</td>
                  <td className="col-2 tableFontSize">{act.information} </td>

                  <td className="col-3 getCenter">
                    <OverlayTrigger
                      key="top"
                      placement="top"
                      overlay={
                        <Tooltip id="tooltip-top">
                          Zobacz szczegóły zadania
                        </Tooltip>
                      }
                    >
                      <img
                        className="imgTable"
                        src="https://img.icons8.com/external-flatart-icons-outline-flatarticons/35/null/external-user-cv-resume-flatart-icons-outline-flatarticons.png"
                        alt="Szczegóły"
                        onClick={(e) => {
                          getAction(act);
                        }}
                      />
                    </OverlayTrigger>
                  </td>
                </tr>
              ))}
          </tbody>
        </Table>
        <p className="getLeft"> DZISIEJSZE ZADANIA</p>
        <Table variant="light" striped bordered hover className="fullWidth">
          <tbody>
            {actions
              .filter((act) => {
                return act.nextContactData.slice(0, 10) === start;
              })
              .map((act, index) => (
                <tr key={index}>
                  <td className="col-3 tableFontSize">
                    {act.nextContactData.slice(0, 10)}
                  </td>
                  <td className="col-2 tableFontSize">{act.user}</td>
                  <td className="col-2 tableFontSize">{act.customer.name}</td>
                  <td className="col-2 tableFontSize">{act.information} </td>
                  <td className="col-3 getCenter">
                    <OverlayTrigger
                      key="top"
                      placement="top"
                      overlay={
                        <Tooltip id="tooltip-top">
                          Zobacz szczegóły zadania
                        </Tooltip>
                      }
                    >
                      <img
                        className="imgTable"
                        src="https://img.icons8.com/external-flatart-icons-outline-flatarticons/35/null/external-user-cv-resume-flatart-icons-outline-flatarticons.png"
                        alt="Szczegóły"
                        onClick={(e) => {
                          getAction(cust);
                        }}
                      />
                    </OverlayTrigger>
                  </td>
                </tr>
              ))}
          </tbody>
        </Table>

        <p className="getLeft"> NADCHODZĄCE ZADANIA</p>
        <Table variant="light" striped bordered hover className="fullWidth">
          <tbody>
            {actions
              .filter((act) => {
                return act.nextContactData.slice(0, 10) > start;
              })
              .map((act, index) => (
                <tr key={index}>
                  <td className="col-3 tableFontSize">
                    {act.nextContactData.slice(0, 10)}
                  </td>
                  <td className="col-2 tableFontSize">{act.user}</td>
                  <td className="col-2 tableFontSize">{act.customer.name}</td>
                  <td className="col-2 tableFontSize">{act.information} </td>
                  <td className="col-3 getCenter">
                    <OverlayTrigger
                      key="top"
                      placement="top"
                      overlay={
                        <Tooltip id="tooltip-top">
                          Zobacz szczegóły zadania
                        </Tooltip>
                      }
                    >
                      <img
                        className="imgTable"
                        src="https://img.icons8.com/external-flatart-icons-outline-flatarticons/35/null/external-user-cv-resume-flatart-icons-outline-flatarticons.png"
                        alt="Szczegóły"
                        onClick={(e) => {
                          getAction(cust);
                        }}
                      />
                    </OverlayTrigger>
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
export default TableCustomers;
