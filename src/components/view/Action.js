import React from "react";
import "../css/Action.css";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import { Container, Form, Button } from "react-bootstrap";
import Menu from "./Menu";
import Footer from "./Footer";
import { Toast, ToastContainer } from "react-bootstrap";
import axios from "axios";

const Action = (props) => {
  const [show, setShow] = useState(false);
  const [customer, setCustomer] = useState({});

  let location = useLocation();
 // console.log("Jebać pis:", location.state.customer);

  const handleSubmit = (e) => {
    // console.log("Form Submitted");
    const file = document.getElementById("file-field").files[0];
    const url = "http://localhost:8080/uploadCustomerFiles";
    const config = {
      headers: {
        "content-type": "multipart/form-data",
      },
    };
    const data = new FormData();
    data.append("customerFiles", file);
    axios.post(url, data, config).then((response) => {
     // console.log(response);
    });
  };



  return (
    <Container>
      <ToastContainer className="p-3" position="top-end" style={{ zIndex: 1 }}>
        <Toast
          onClose={() => setShow(false)}
          show={show}
          delay={5000}
          autohide
          bg="success"
          className="success"
        >
          <Toast.Header>
            <img
              src="holder.js/20x20?text=%20"
              className="rounded me-2 "
              alt=""
            />
            <strong className="me-auto">Bootstrap</strong>
          </Toast.Header>
          <Toast.Body className={'text-white'}>Dodano zadanie</Toast.Body>
        </Toast>
      </ToastContainer>

      <Menu />

      <div className="formAction">
        <div className="inputFlex">
          <div className="inputBlock">
            <p className="textAction">Kierunek kontaktu :</p>
            <select
              className="selectAction"
              name="kierunek"
              as="select"
              id="kierunek"
              required
            >
              <option>----- Kierunek kontaktu-----</option>
              <option value="rekomendacje" name="rekomendacje">
                Rekomendacje
              </option>
              <option value="inicjatywa" name="inicjatywa">
                Inicjatywa własna
              </option>
              <option value="gielda" name="gielda">
                Giełda
              </option>
              <option value="Klient-firma-telefon" name="kft">
                Klient - Firma - Telefon
              </option>
              <option value="Firma-klient-telefon" name="fkt">
                Firma - Klient - Telefon
              </option>
              <option value="Klient-firma-email" name="kfe">
                Klient - Firma - Email
              </option>
              <option value="Firma-klient-email" name="fke">
                Firma - Klient - Email
              </option>
            </select>
          </div>
          <div className="inputBlock">
            <p className="textAction">Sposób kontaktu :</p>
            <select
              className="selectAction"
              as="select"
              name="sposob"
              id="sposob"
            >
              <option>------ Sposób kontaktu------</option>
              <option value="wizytaHandlowca" name="wizytaHandlowca">
                Wizyta handlowca u Klienta
              </option>
              <option value="wizytaKlienta" name="wizytaKlienta">
                Wizyta Klienta w firmie
              </option>
              <option value="email" name="email">
                Email
              </option>
              <option value="telefon" name="telefon">
                Telefon
              </option>
            </select>
          </div>
        </div>
        <div className="inputFlex">
          <div className="inputBlock">
            <p className="textAction">Informacje :</p>
            <textarea
              className="inputAction"
              aria-label="With textarea"
            ></textarea>
          </div>
          <div className="inputBlock">
            {" "}
            <p className="textAction">Dodaj załącznik</p>
            <div>
              <input id="file-field" type="file" name="customerFiles" />
              </div>
           
          </div>
        </div>

        <Button
          variant="outline-success"
          className="btn m-3"
          onClick={() => {
            handleSubmit()
          }}
        >
          Zapisz
        </Button>
      </div>

      <Footer />
    </Container>
  );
};

export default Action;
