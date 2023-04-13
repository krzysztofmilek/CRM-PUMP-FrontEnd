import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Row from "react-bootstrap/Row";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { registerLocale } from "react-datepicker";
import pl from "date-fns/locale/pl";
registerLocale("pl", pl);

function CustomerCard(props) {
  const [validated, setValidated] = useState(false);
  const [startDate, setStartDate] = useState(new Date());

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    setValidated(true);
  };
  return (
    <div className="containerCard">
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Row className="mb-3">
          <Form.Group as={Col} md="4" controlId="validationCustom01">
            <Form.Label>
              <b>
                Imię nazwisko osoby kontaktowej <span className="red">*</span>
              </b>
            </Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="imię i nazwisko osoby kontaktowej"
            />
            <Form.Control.Feedback type="invalid">
              Nazwa firmy
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="4" controlId="validationCustom02">
            <Form.Label>Nazwa firmy </Form.Label>
            <Form.Control type="text" placeholder="Nazwa firmy" />
            <Form.Control.Feedback type="invalid">
              Wpisz Nazwę firmy
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="4" controlId="validationCustom03">
            <Form.Label>
              <b>
                NIP<span className="red">*</span>
              </b>
            </Form.Label>
            <Form.Control required type="text" placeholder="NIP" />
            <Form.Control.Feedback type="invalid">
              Wpisz NIP
            </Form.Control.Feedback>
          </Form.Group>
        </Row>
        <Row className="mb-3">
          <Form.Group as={Col} md="4" controlId="validationCustom04">
            <Form.Label>
              <b>
                Telefon <span className="red">*</span>
              </b>
            </Form.Label>
            <Form.Control required type="text" placeholder="Telefon" />
            <Form.Control.Feedback type="invalid">
              Wpisz telefon
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="4" controlId="validationCustom06">
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
                required
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
            <Form.Control type="text" placeholder="Kod pocztowy" />
            <Form.Control.Feedback type="invalid">
              Wpisz kod
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="4" controlId="validationCustom08">
            <Form.Label>Miasto</Form.Label>
            <Form.Control type="text" placeholder="Miasto" />
            <Form.Control.Feedback type="invalid">
              Wpisz miasto
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="4">
            <Form.Label>Ulica, nr domu i mieszkania</Form.Label>
            <Form.Control
              type="text"
              placeholder="Ulica, nr domu i mieszkania"
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
              onChange={(date) => setStartDate(date)}
              isClearable
              placeholderText="Wybierz datę"
            />
          </Form.Group>
          <Form.Group as={Col} md="4"></Form.Group>

          <Form.Group as={Col} md="1" className="mt-5">
            <Button type="submit">ZAPISZ</Button>
          </Form.Group>
          <Form.Group as={Col} md="1" className="mt-5">
            <Button type="submit">DALEJ</Button>
          </Form.Group>
        </Row>
      </Form>
    </div>
  );
}

export default CustomerCard;
