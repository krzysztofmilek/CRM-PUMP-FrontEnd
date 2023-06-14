import { useState, useEffect } from "react";
import React from "react";
import { Button, Col, Form, InputGroup, Row } from "react-bootstrap";
import axios from "axios";
import "../css/CustomerCard.css";
import { Link } from "react-router-dom";
import Toasts from "../toasts/Toasts";
import OverlayTrigText from "../overLay/OverlayTrigText";

const CustomerCard = (props) => {
  const [addCustomer, setAddCustomer] = useState({});
  const [newCustomer, setNewCustomer] = useState({});
  // eslint-disable-next-line
  const [customer, setCustomer] = useState("");

  const [show, setShow] = useState(true);
  const [showToast, setShowToast] = useState(false);
  const [showToastAlert, setShowToastAlert] = useState(false);
  const [showToastAlertName, setShowToastAlertName] = useState(false);
  const [showToastAlertPhone, setShowToastAlertPhone] = useState(false);
  const [showToastAlertEmail, setShowToastAlertEmail] = useState(false);
  const [token, setToken] = useState({});
  const [showClass, setShowClass] = useState("show");

  // get full Date
  const getFD = new Date();
  //Day
  const getDay = getFD.getDate() < 10 ? "0" + getFD.getDate() : getFD.getDate();
  const getNextDay = getDay;
  const gM = getFD.getMonth();
  const gMAddOne = gM + 1;
  const getMonth = gMAddOne < 10 ? "0" + gMAddOne : "";
  const getYear = getFD.getFullYear();
  const dateSubString = getYear + "-" + getMonth + "-" + getNextDay;
  const getDate = dateSubString.toString();

  const getIdUser = JSON.parse(localStorage.getItem("user"));

  const add = async () => {
    if (addCustomer.name === undefined || "") {
      setShowToastAlertName(true);
      return;
    } else if (addCustomer.phone === undefined) {
      setShowToastAlertPhone(true);
      return;
    } else if (addCustomer.email === undefined || "") {
      setShowToastAlertEmail(true);
      return;
    } else {
      const pos = {
        name: addCustomer.name,
        phone: addCustomer.phone,
        email: addCustomer.email,
        nameCompany: addCustomer.nameCompany,
        NIP: addCustomer.NIP,
        data: getDate,
        agreement_1: true,
        zip: addCustomer.zip,
        street: addCustomer.street,
        city: addCustomer.city,
        //user: userId,
      };

      const newCustomerRes = await axios.post(
        "http://localhost:8080/customer/add",
        pos
      );
      if (newCustomerRes.data.error) {
        setShowToastAlert(true);
        return;
      } else {
        setNewCustomer(newCustomerRes.data);
        setCustomer(newCustomerRes.data);
        setShowToast(true);
        setShow(false);
      }
    }
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
      [e.target.data]: getDate,
      [e.target.NIP]: e.target.value,
      [e.target.nameCompany]: e.target.value,
    }));

  useEffect(() => {
    setToken(getIdUser);
    // eslint-disable-next-line
  }, []);

  console.log(props);
  //const onClose=(() => setShowToast(false));

  return (
    <div className="getLeft">
      <Toasts
        bodyBackground="success"
        className="text-white"
        title="Dodawanie Klienta"
        bodyText="Klient dodany prawidłowo"
        showWindow={showToast}
        setShowWindow={setShowToast}
      />

      <Toasts
        bodyBackground="danger"
        className="text-white"
        title="UWAGA"
        bodyText="Klient z podanym adresem email już istnieje"
        showWindow={showToastAlert}
        setShowWindow={setShowToastAlert}
      />
      <Toasts
        bodyBackground="danger"
        className="text-white"
        title="UWAGA POLE WYMAGANE"
        bodyText="Wypełnij pole z imieniem i nazwiskiem"
        showWindow={showToastAlertName}
        setShowWindow={setShowToastAlertName}
      />
      <Toasts
        bodyBackground="danger"
        className="text-white"
        title="UWAGA POLE WYMAGANE"
        bodyText="Podaj telefon"
        showWindow={showToastAlertPhone}
        setShowWindow={setShowToastAlertPhone}
      />
      <Toasts
        bodyBackground="danger"
        className="text-white"
        title="UWAGA POLE WYMAGANE"
        bodyText="Wypełnij pole Email"
        showWindow={showToastAlertEmail}
        setShowWindow={setShowToastAlertEmail}
      />

      <Form>
        <Row className="mb-3">
          <Form.Group
            as={Col}
            md="4" // controlId="validationCustom01"
          >
            <Form.Label className="titleInput">
              <b>
                Imię nazwisko osoby kontaktowej <span className="red">*</span>
              </b>
            </Form.Label>
            <Form.Control
              required
              type="text"
              // placeholder="imię i nazwisko osoby kontaktowej"
              name="name"
              id="name"
              value={addCustomer.name || props.getCustomer?.name || ""}
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
            <Form.Label className="titleInput">Nazwa firmy </Form.Label>
            <Form.Control
              type="text"
              //  placeholder="Nazwa firmy"
              name="nameCompany"
              id="nameCompany"
              value={
                addCustomer.nameCompany || props.getCustomer?.nameCompany || ""
              }
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
            <Form.Label className="titleInput">NIP</Form.Label>
            <Form.Control
              type="text"
              //   placeholder="NIP"
              name="NIP"
              id="NIP"
              value={addCustomer.NIP || props.getCustomer?.NIP || ""}
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
            <Form.Label className="titleInput">
              <b>
                Telefon <span className="red">*</span>
              </b>
            </Form.Label>
            <Form.Control
              required
              type="text"
              //   placeholder="Telefon"
              name="phone"
              id="phone"
              value={addCustomer.phone || props.getCustomer?.phone || ""}
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
            <Form.Label className="titleInput">
              <b>
                Adres e-mail <span className="red">*</span>
              </b>
            </Form.Label>
            <InputGroup hasValidation>
              <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
              <Form.Control
                type="text"
                //   placeholder="Adres e-mail"
                aria-describedby="inputGroupPrepend"
                name="email"
                id="email"
                value={addCustomer.email || props.getCustomer?.email || ""}
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
            <Form.Label className="titleInput">Kod pocztowy</Form.Label>
            <Form.Control
              type="text"
              //    placeholder="Kod pocztowy"
              name="zip"
              id="zip"
              value={addCustomer.zip || props.getCustomer?.zip || ""}
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
            <Form.Label className="titleInput">Miasto</Form.Label>
            <Form.Control
              type="text"
              //    placeholder="Miasto"
              name="city"
              id="city"
              value={addCustomer.city || props.getCustomer?.city || ""}
              onChange={getCustomer}
            />
            <Form.Control.Feedback type="invalid">
              Wpisz miasto
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="4">
            <Form.Label className="titleInput">
              Ulica, nr domu i mieszkania
            </Form.Label>
            <Form.Control
              type="text"
              //     placeholder="Ulica, nr domu i mieszkania"
              name="street"
              id="street"
              value={addCustomer.street || props.getCustomer?.street || ""}
              onChange={getCustomer}
            />
          </Form.Group>
        </Row>
        <Row className="mb-1">
          <Form.Group as={Col} md="5">
            <Form.Check
              className="textCustomer"
              required
              label="Wyrażam zgodę na przetwarzanie marketingowe"
              feedback="Pole musi być zaznaczone"
              feedbackType="invalid"
              onChange={getCustomer}
              value={
                addCustomer.agreement_1 || props.getCustomer?.agreement_1 || ""
              }
            />
          </Form.Group>

          <Form.Group as={Col} md="3" className="top">
            <Button
              variant="outline-success"
              onClick={add}
              className={props.showClass}
            >
              Zapisz
            </Button>
          </Form.Group>
          <Form.Group as={Col} md="4" className="top">
            <Button
              className={props.showClass}
              variant="outline-success"
              as={Link}
              disabled={show}
              to="/action"
              state={{ customer: newCustomer, token: token, getDate: getDate }}
              style={{ pointerEvents: show ? "none" : "auto" }}
            >
              Dalej show
            </Button>

            <Button
              className={props.showClassButton}
              variant="outline-success"
              as={Link}
              disabled={!props.showButton}
              to="/action"
              state={{
                customer: props.getCustomer,
                token: token,
                getDate: getDate,
              }}
              style={{
                pointerEvents: props.show ? "none" : "auto",
                background: props.showButton ? "green" : "white",
                color: props.showButton ? "white" : "green",
              }}
            >
              {props.showButton ? (
                "Dalej"
              ) : (
                <OverlayTrigText
                  toltip="Aby uaktywnić przycisk :  Pobierz dane Klienta"
                  text="Dalej"
                />
              )}
            </Button>
            {/*  '{ props.showButton?  ""  : "Pobierz dane Klienta by uaktywnić button"     }`  */}
          </Form.Group>
        </Row>
      </Form>
      <br />
      <br />
      <br />
    </div>
  );
};
export default CustomerCard;
