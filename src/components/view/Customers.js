import { useState, useEffect } from "react";
import React from "react";
import { Table, Button } from "react-bootstrap";
import axios from "axios";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Row from "react-bootstrap/Row";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { registerLocale } from "react-datepicker";
import pl from "date-fns/locale/pl";
registerLocale("pl", pl);


const Customers = () => {
  const [customers, setCustomers] = useState([]);
  const [validated, setValidated] = useState(false);
  const [startDate, setStartDate] = useState(new Date());
  const [editUser, setEditUser] = useState({});


  const getUser = (e) => setEditUser(prevState => ({
    ...prevState,
  
    [e.target.city]: e.target.value,
    [e.target.email]: e.target.value,
    [e.target.name]: e.target.value,
    [e.target.phone]: e.target.value,
    [e.target.street]: e.target.value,
    [e.target.zip]: e.target.value,
    [e.target.agreement_1]: e.target.value,
    [e.target.data]: e.target.value,
    [e.target.NIP]: e.target.value,
    [e.target.nameCompany]: e.target.value
  }))

  // post dane pobrane do edycji
  const handleShow = (user) => {
    setEditUser(user);

  };


  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };


  const getCustomers = async () => {
    const customer = await axios.get("http://localhost:8080/customers");

    setCustomers(customer.data);
  };

  useEffect(() => {
    getCustomers();
    // eslint-disable-next-line
  }, []) 

  
  return (
    <div>
       <div className="containerCard">
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Row className="mb-3">
          <Form.Group as={Col} md="4" controlId="validationCustom01">
            <Form.Label><b>Imię nazwisko osoby kontaktowej <span className="red">*</span></b></Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="imię i nazwisko osoby kontaktowej"
              name="name"
              id="name"
              value={editUser.name}
              onChange={getUser}
              
            />
            <Form.Control.Feedback type="invalid">
             Nazwa firmy
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="4" controlId="validationCustom02">
            <Form.Label>Nazwa firmy </Form.Label>
            <Form.Control
              type="text"
              placeholder="Nazwa firmy"
              name="nameCompany"
              id="nameCompany"
              value={editUser.nameCompany}
              onChange={getUser} 
            />
            <Form.Control.Feedback type="invalid">
              Wpisz Nazwę firmy
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="4" controlId="validationCustom03">
            <Form.Label><b>NIP<span className="red">*</span></b></Form.Label>
            <Form.Control
              type="text"
              placeholder="NIP"
              name="NIP"
              id="NIP"
              value={editUser.NIP}
              onChange={getUser}
              
            />
            <Form.Control.Feedback type="invalid">
            Wpisz NIP
            </Form.Control.Feedback>
          </Form.Group>



          </Row>
        <Row className="mb-3">
          <Form.Group as={Col} md="4" controlId="validationCustom04">
            <Form.Label><b>Telefon <span className="red">*</span></b></Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="Telefon"
              name="phone"
              id="phone"
              value={editUser.phone}
              onChange={getUser}
           
            />
            <Form.Control.Feedback type="invalid">
              Wpisz telefon
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="4" controlId="validationCustom06">
            <Form.Label><b>Adres e-mail <span className="red">*</span></b></Form.Label>
            <InputGroup hasValidation>
              <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
              <Form.Control
                type="text"
                placeholder="Adres e-mail"
                aria-describedby="inputGroupPrepend"
                name="email"
                id="email"
                value={editUser.email}
                onChange={getUser}
              
              />
              <Form.Control.Feedback type="invalid">
                Wpisz poprawnie e-mail
              </Form.Control.Feedback>
            </InputGroup>
          </Form.Group>
        </Row>
        <Row className="mb-3">
          <Form.Group as={Col} md="4" controlId="validationCustom07">
            <Form.Label>Kod pocztowy</Form.Label>
            <Form.Control
              type="text"
              placeholder="Kod pocztowy"
              name="zip"
              id="zip"
              value={editUser.zip}
              onChange={getUser}
                  
            />
            <Form.Control.Feedback type="invalid">
              Wpisz kod
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="4" controlId="validationCustom08">
            <Form.Label>Miasto</Form.Label>
            <Form.Control 
            type="text" 
            placeholder="Miasto" 
            name="city"
            id="city"
            value={editUser.city}
            onChange={getUser}
            />
            <Form.Control.Feedback type="invalid">
              Wpisz miasto
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="4" >
            <Form.Label>Ulica, nr domu i mieszkania</Form.Label>
            <Form.Control
              type="text"
              placeholder="Ulica, nr domu i mieszkania"
              name="street"
              id="street"
              value={editUser.street}
              onChange={getUser}
              />
                 </Form.Group>
        </Row>
        <Row className="mb-1">
          
          <Form.Group as={Col} md="4">
            <Form.Check
              required
              label="Wyrażam zgodę na przeytwarzanie marketingowe"
              feedback="Pole musi być zaznaczone"
              feedbackType="invalid"
            />
          </Form.Group>
          <Form.Group as={Col} md="2">
            <DatePicker
              dateFormat="dd/MM/yyyy"
              todayButton="Wybierz datę"
              selected={startDate}
              locale={pl}
              onChange={getUser}
              //onChange={(date) => setStartDate(date)}
              isClearable
              placeholderText="Wybierz datę"
              name="data"
              id="data"
              value={editUser.data}
            />
          </Form.Group>
          <Form.Group as={Col} md="4"></Form.Group>

          <Form.Group as={Col} md="1" className="mt-5">
            <Button type="submit">ZAPISZ</Button>
          </Form.Group>
          <Form.Group as={Col} md="1" className="mt-5">
            <Button type="submit">NOWY LEAD</Button>
          </Form.Group>
        </Row>
      </Form>
    </div>
 {/* --------------------------------------------------------- tabela */}
      <Table variant="light" striped bordered hover className="fullWidth">
        <tbody>
          {customers.map((cust, index) => (
            <tr key={index}>
              <td className="col-3 tableFontSize">{cust.name}</td>
              <td className="col-2 tableFontSize">{cust.phone}</td>
              <td className="col-2 tableFontSize">{cust.email}</td>
              <td className="col-2 tableFontSize">
                {cust.data.substring(0, 10)}
              </td>
              <td className="col-2 getRight">
                <Button variant="success" size="sm">
                  Użyj
                </Button>
              </td>
              <td className="col-2 getRight">
                <Button variant="success" size="sm" onClick={() => handleShow(cust)}>
                  Edytuj
                </Button>
              </td>
              <td className="col-2 getRight">
                <Button variant="success" size="sm">
                  Historia
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};
export default Customers;
