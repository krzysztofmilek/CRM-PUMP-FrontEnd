import { useState, useEffect } from "react";
import React from "react";
import { Table, Button, Container, Col, Form, InputGroup, Row,OverlayTrigger, Tooltip } from "react-bootstrap";
import axios from "axios";
import ModalDeleteCustomer from "../modals/ModalDeleteCustomer";
import ModalEditCustomer from "../modals/ModalEditCustomer";
//import moment from 'moment'
//import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { registerLocale } from "react-datepicker";
import pl from "date-fns/locale/pl";
import NavBar from "./NavBar";
registerLocale("pl", pl);

const Customers = () => {
  const [customers, setCustomers] = useState([]);
  const [validated, setValidated] = useState(false);
  const [editCustomer, setEditCustomer] = useState({});
  const [search, setSearch] = useState("");



// get full Date
const getFD = new Date();

//Day
const getDay = ((getFD.getDate() <10)? "0"+ getFD.getDate():getFD.getDate());
console.log("data"+getDay);


//Month
const gM = getFD.getMonth();
const gMAddOne = gM+1;
const getMonth = ((gMAddOne <10)?"0"+gMAddOne : "");
//year
const getYear = getFD.getFullYear();

// added to day 3 - no use rozbudowac o warunek zmiany daty z 31 na 1
//const upDay = (getDay + 3);
//to string
const dateSubString = (getYear +"-"+getMonth+"-"+ getDay);
const getTodey = dateSubString.toString();
console.log("todey",getTodey);


  const addCustomer = async () => {
    const pos = {
      name: editCustomer.name,
      phone: editCustomer.phone,
      email: editCustomer.email,
      nameCompany: editCustomer.nameCompany,
      NIP: editCustomer.NIP,
      data: getTodey,
      agreement_1: true,
      zip: editCustomer.zip,
      street: editCustomer.street,
      city: editCustomer.city,
    };
    console.log("pos 1",pos);
    await axios.post("http://localhost:8080/customer/add", pos);
    console.log("pos", pos);
     console.log("editCon",editCustomer)
  };

  const getCustomer = (e) =>
    setEditCustomer((prevState) => ({
      ...prevState,
      [e.target.city]: e.target.value,
      [e.target.email]: e.target.value,
      [e.target.name]: e.target.value,
      [e.target.phone]: e.target.value,
      [e.target.street]: e.target.value,
      [e.target.zip]: e.target.value,
      [e.target.agreement_1]: true,
      [e.target.data]: getTodey,
      [e.target.NIP]: e.target.value,
      [e.target.nameCompany]: e.target.value,
    }));


  const getCustomers = async () => {
    const customer = await axios.get("http://localhost:8080/customers");

    setCustomers(customer.data);
  };

  useEffect(() => {
    getCustomers();
    // eslint-disable-next-line
  }, []);
  const findCustomer = (e) => {
    let getFindCustomer = e.target.value;
    let lowerGetFindCustomer = getFindCustomer.toLowerCase();
    setSearch(lowerGetFindCustomer);
  };

  const clear = () => {
    setSearch("");
    document.getElementById("formSearch").reset();
  };

  return (
    <Container>
      <NavBar />
      <div className="up getLeft">
        <p className="tittle">Dodaj nowego Klienta</p>
        <hr />
        <Form noValidate validated={validated}>
          <Row className="mb-3">
            <Form.Group
              as={Col}
              md="4" //controlId="validationCustom01"
            >
              <Form.Label>
                <b>
                  Imię nazwisko osoby kontaktowej <span className="red">*</span>
                </b>
              </Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="imię i nazwisko osoby kontaktowej"
                name="name"
                id="name"
                value={editCustomer.name || ""}
                onChange={getCustomer}
              />
              <Form.Control.Feedback type="invalid">
                Wpisz dane osoby kontaktowej
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group
              as={Col}
              md="4" //controlId="validationCustom02"
            >
              <Form.Label>Nazwa firmy </Form.Label>
              <Form.Control
                type="text"
                placeholder="Nazwa firmy"
                name="nameCompany"
                id="nameCompany"
                value={editCustomer.nameCompany || ""}
                onChange={getCustomer}
              />
              <Form.Control.Feedback type="invalid">
                Wpisz Nazwę firmy
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group
              as={Col}
              md="4" //controlId="validationCustom03"
            >
              <Form.Label>NIP</Form.Label>
              <Form.Control
                type="text"
                placeholder="NIP"
                name="NIP"
                id="NIP"
                value={editCustomer.NIP || ""}
                onChange={getCustomer}
              />
              <Form.Control.Feedback type="invalid">
                Wpisz NIP
              </Form.Control.Feedback>
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group
              as={Col}
              md="4" //controlId="validationCustom04"
            >
              <Form.Label>
                <b>
                  Telefon <span className="red">*</span>
                </b>
              </Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="Telefon"
                name="phone"
                id="phone"
                value={editCustomer.phone || ""}
                onChange={getCustomer}
              />
              <Form.Control.Feedback type="invalid">
                Wpisz telefon
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group
              as={Col}
              md="4" //controlId="validationCustom06"
            >
              <Form.Label>
                <b>
                  Adres e-mail <span className="red">*</span>
                </b>
              </Form.Label>
              <InputGroup hasValidation>
                <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
                <Form.Control
                  type="text"
                  placeholder="Adres e-mail"
                  aria-describedby="inputGroupPrepend"
                  name="email"
                  id="email"
                  value={editCustomer.email || ""}
                  onChange={getCustomer}
                />
                <Form.Control.Feedback type="invalid">
                  Wpisz poprawnie e-mail
                </Form.Control.Feedback>
              </InputGroup>
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group
              as={Col}
              md="4" //controlId="validationCustom07"
            >
              <Form.Label>Kod pocztowy</Form.Label>
              <Form.Control
                type="text"
                placeholder="Kod pocztowy"
                name="zip"
                id="zip"
                value={editCustomer.zip || ""}
                onChange={getCustomer}
              />
              <Form.Control.Feedback type="invalid">
                Wpisz kod
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group
              as={Col}
              md="4" //controlId="validationCustom08"
            >
              <Form.Label>Miasto</Form.Label>
              <Form.Control
                type="text"
                placeholder="Miasto"
                name="city"
                id="city"
                value={editCustomer.city || ""}
                onChange={getCustomer}
              />
              <Form.Control.Feedback type="invalid">
                Wpisz miasto
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4">
              <Form.Label>Ulica, nr domu i mieszkania</Form.Label>
              <Form.Control
                type="text"
                placeholder="Ulica, nr domu i mieszkania"
                name="street"
                id="street"
                value={editCustomer.street || ""}
                onChange={getCustomer}
              />
            </Form.Group>
          </Row>
          <Row className="mb-1">
            <Form.Group as={Col} md="5">
              <Form.Check
                required
                label="Wyrażam zgodę na przetwarzanie marketingowe"
                feedback="Pole musi być zaznaczone"
                feedbackType="invalid"
                onChange={getCustomer}
                value={editCustomer.agreement_1 || ""}
              />
            </Form.Group>

            <Form.Group as={Col} md="2"></Form.Group>

            <Form.Group as={Col} md="1" className="mt-5">
              <Button type="" onClick={addCustomer}>
                ZAPISZ
              </Button>
            </Form.Group>
            <Form.Group as={Col} md="2" className="mt-5">
              <Button type="">NOWY LEAD</Button>
            </Form.Group>
          </Row>
        </Form>
      </div>
      <div className="down">
        <p className="tittle">Wyszukaj Klienta</p>
        <hr />
        <Table variant="light" striped bordered hover className="fullWidth">
          <thead>
            <tr>
              <th>
                <div className="input-group">
                  <span className="input-group-addon">
                    <img
                      className="imgTable"
                      src="https://img.icons8.com/small/35/null/find-user-male.png"
                      alt="znajdz"
                    />
                  </span>

                  <form id="formSearch" className="input-search">
                    <input
                      type="text"
                      className="input-search"
                      name="inputSearch"
                      id="inputSearch"
                      onChange={findCustomer}
                    />
                  </form>
                </div>
              </th>
              <th className="getLeft">
                <Button variant="outline-success" onClick={clear}>
                  Wyczyść formularz
                </Button>
              </th>
            </tr>
          </thead>
        </Table>

        <p className="tittle">Lista Klientów</p>
        <hr />

        {/* --------------------------------------------------------- tabela */}
        <Table variant="light" striped bordered hover className="fullWidth">
          <tbody>
            {customers
              .filter((cust) => {
                return search.toLowerCase() === ""
                  ? cust
                  : cust.name.toLowerCase().includes(search) ||
                      cust.email.toLowerCase().includes(search) ||
                      cust.NIP.toLowerCase().includes(search);
              })
              .map((cust, index) => (
                <tr key={index}>
                  <td className="col-3 tableFontSize">{cust.name}</td>
                  <td className="col-2 tableFontSize">{cust.phone}</td>
                  <td className="col-2 tableFontSize">{cust.email}</td>
                  <td className="col-2 tableFontSize">{cust.data.substring(0,10)}
                  </td>
                  <td className="col-1 getCenter">
                    <OverlayTrigger
                      key="top"
                      placement="top"
                      overlay={
                        <Tooltip id="tooltip-top">Pobierz Dane Klienta</Tooltip>
                      }
                    >
                      <img
                        className="imgTable"
                        src="https://img.icons8.com/windows/35/null/checked-user-male--v1.png"
                        alt="Pobierz Dane Klienta"
                    
                      />
                    </OverlayTrigger>
                  </td>
                  <td className="col-1 getCenter">
                  <ModalEditCustomer cust={cust} getCustomers={getCustomers} />
                  </td>
                  <td className="col-1 getCenter">
                    <OverlayTrigger
                      key="top"
                      placement="top"
                      overlay={
                        <Tooltip id="tooltip-top">
                          Historia Kontaktów z Klientem
                        </Tooltip>
                      }
                    >
                      <img
                        className="imgTable"
                        src="https://img.icons8.com/fluency-systems-regular/48/null/order-history.png"
                        alt="Historia Klienta"
                     
                      />
                    </OverlayTrigger>
                  </td>
                  <td>
                 
<ModalDeleteCustomer post={cust} getUsers={getCustomers} />
                  </td>
                </tr>
              ))}
          </tbody>
        </Table>
      </div>
    </Container>
  );
};
export default Customers;
