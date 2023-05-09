import { useState} from "react";
import React from "react";
import {  Button, Col, Form, InputGroup, Row, } from "react-bootstrap";
import axios from "axios";
import "../css/CustomerCard.css"



const CustomerCard = () => {


  const [addCustomer, setAddCustomer] = useState({});




// get full Date
const getFD = new Date();

//Day
const getDay = ((getFD.getDate() <10)? "0"+ getFD.getDate():getFD.getDate());



const gM = getFD.getMonth();
const gMAddOne = gM+1;
const getMonth = ((gMAddOne <10)?"0"+gMAddOne : "");
const getYear = getFD.getFullYear();
const dateSubString = (getYear +"-"+getMonth+"-"+ getDay);
const getTodey = dateSubString.toString();



  const add = async () => {
    const pos = {
      name: addCustomer.name,
      phone: addCustomer.phone,
      email: addCustomer.email,
      nameCompany: addCustomer.nameCompany,
      NIP: addCustomer.NIP,
      data: getTodey,
      agreement_1: true,
      zip: addCustomer.zip,
      street: addCustomer.street,
      city: addCustomer.city,
    };
  
    await axios.post("http://localhost:8080/customer/add", pos);
   
     
  };

  const getCustomer = (e) =>
    setAddCustomer((prevState) => ({
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




  return (
 
 
      <div className="getLeft">
     
        <Form >
          <Row className="mb-3">
            <Form.Group
              as={Col}
              md="4" //controlId="validationCustom01"
            >
              <Form.Label className="textCustomer">
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
                value={addCustomer.name || ""}
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
              <Form.Label className="textCustomer">Nazwa firmy </Form.Label>
              <Form.Control
                type="text"
                placeholder="Nazwa firmy"
                name="nameCompany"
                id="nameCompany"
                value={addCustomer.nameCompany || ""}
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
              <Form.Label className="textCustomer">NIP</Form.Label>
              <Form.Control
                type="text"
                placeholder="NIP"
                name="NIP"
                id="NIP"
                value={addCustomer.NIP || ""}
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
              <Form.Label className="textCustomer">
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
                value={addCustomer.phone || ""}
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
              <Form.Label className="textCustomer">
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
                  value={addCustomer.email || ""}
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
              <Form.Label className="textCustomer">Kod pocztowy</Form.Label>
              <Form.Control
                type="text"
                placeholder="Kod pocztowy"
                name="zip"
                id="zip"
                value={addCustomer.zip || ""}
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
              <Form.Label className="textCustomer">Miasto</Form.Label>
              <Form.Control
                type="text"
                placeholder="Miasto"
                name="city"
                id="city"
                value={addCustomer.city || ""}
                onChange={getCustomer}
              />
              <Form.Control.Feedback type="invalid">
                Wpisz miasto
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4">
              <Form.Label className="textCustomer">Ulica, nr domu i mieszkania</Form.Label>
              <Form.Control
                type="text"
                placeholder="Ulica, nr domu i mieszkania"
                name="street"
                id="street"
                value={addCustomer.street || ""}
                onChange={getCustomer}
              />
            </Form.Group>
          </Row>
          <Row className="mb-1">
            <Form.Group as={Col} md="5">
              <Form.Check className="textCustomer"
                required
                label="Wyrażam zgodę na przetwarzanie marketingowe"
                feedback="Pole musi być zaznaczone"
                feedbackType="invalid"
                onChange={getCustomer}
                value={addCustomer.agreement_1 || ""}
              />
            </Form.Group>

            <Form.Group as={Col} md="2"></Form.Group>

            <Form.Group as={Col} md="2" className="top">
              <Button variant="outline-success" onClick={add}>
               Zapisz
              </Button>
            </Form.Group>
            <Form.Group as={Col} md="2" className="top">
              <Button variant="outline-success">Dalej</Button>
            </Form.Group>
          </Row>
        </Form>
        <br /><br /><br />
      </div>
    

  );
};
export default CustomerCard;
