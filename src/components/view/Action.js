import React from "react";
//import "../css/Action.css";
import { useState } from "react";
import { Container, Button, Form } from "react-bootstrap";
import Menu from "./Menu";
import Footer from "./Footer";
import Toasts from "../toasts/Toasts";
import axios from "axios";

const Action = (props) => {
  const [show, setShow] = useState(false);
  const [dataPicker, setDataPicker] = useState();
  const [selectData, setSelectData] = useState({});

  const customer = props.state.customer;
  const token = props.state.token;
  const tomorrow = props.state.getDate;

  const getDatePicker = (e) => {
    let dat = e.target.value;
    setDataPicker(dat);
  };

  const getValue = (e) => {
    setSelectData({
      ...selectData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    const file = document.getElementById("file-field").files[0];
    const url = "http://localhost:8080/uploadCustomerFiles";
    const config = {
      headers: {
        "content-type": "multipart/form-data",
      },
    };
    const data = new FormData();
    data.append("customerFiles", file);
    axios.post(url, data, config);
    const pos = {
      contactData: tomorrow,
      nextContactData: dataPicker,
      information: selectData.information,
      conatactWay: selectData.conatactWay,
      direction: selectData.direction,
      fileName: file?.name,
      status: "open",
      user: token.id_user,
      customer: customer._id,
    };

    axios.post("http://localhost:8080/action/add", pos);
  };

  return (
    <Container>
      <Toasts
        bodyBackground="success"
        className="text-white"
        title="ZADANIA"
        bodyText="Dodano nowe zadanie"
        showWindow={show}
        setShowWindow={setShow}
      />

      <Menu />

      <div className="formAction">
        <div className="inputFlex">
          <div className="inputBlock">
            <p className="tittle">Kierunek kontaktu :</p>

            <select
              className="selectAction"
              name="direction"
              as="select"
              id="directionAdd"
              onChange={getValue}
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
            <p className="tittle">Sposób kontaktu :</p>

            <select
              className="selectAction"
              as="select"
              name="contactWay"
              id="contactWayAdd"
              onChange={getValue}
            >
              <option>------ Sposób kontaktu------</option>
              <option value="wizytaHandlowca" name="contactWay">
                Wizyta handlowca u Klienta
              </option>
              <option value="wizytaKlient" name="contactWay">
                Wizyta Klienta w firmie
              </option>
              <option value="email" name="contactWay">
                Email
              </option>
              <option value="telefon" name="contactWay">
                Telefon
              </option>
            </select>
          </div>
        </div>
        <div className="inputFlex">
          <div className="inputBlock">
            <p className="tittle">Informacje :</p>

            <textarea
              className="inputAction"
              aria-label="With textarea"
              id="informationAdd"
              name="information"
              onChange={getValue}
            ></textarea>
          </div>
          <div className="inputBlock">
            {" "}
            <p className="tittle">Dodaj załącznik</p>
            <hr />
            <div>
              <input id="file-field" type="file" name="customerFiles" />
            </div>
            <hr />
            <p className="tittle">Wybierz datę nastepnego kontaktu</p>
            <hr />
            <div>
              <Form.Group controlId="dob">
                <Form.Control
                  type="date"
                  name="dob"
                  placeholder="Date of Birth"
                  onChange={getDatePicker}
                />
              </Form.Group>
            </div>
          </div>
        </div>

        <Button
          variant="outline-success"
          className="btn m-3"
          onClick={() => {
            handleSubmit();
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
