import React, { useState } from "react";
import { Row, Form, Button, Col } from "react-bootstrap";
import  '../css/SettingsInfo.css';

const SettingsInfo = (props) => {
  const [forms, setForms] = useState({});
  const [errors, setErrors] = useState({});

  const getCompany = (field, value) => {
    setForms({
      ...forms,
      [field]: value,
    });

    if (!!errors[field])
      setErrors({
        ...errors,
        [field]: null,
      });
  };
  const validateForm = () => {
    const {
      nameCompany,
      NIP,
      streetAddress,
      cityAddress,
      zippAddress,
      emailAddress,
      phoneAddress,
    } = forms;
    const newErrors = {};
    if (!nameCompany || nameCompany === "")
      newErrors.nameCompany = "Wpisz nazwisko";
    else if (!NIP || NIP === "") newErrors.NIP = "Podaj Nip";
    else if (!streetAddress || streetAddress === "")
      newErrors.streetAddress = "Podaj ulice i nr";
    else if (!zippAddress || zippAddress === "")
      newErrors.zippAddress = "Wpisz kod pocztowy";
    else if (!cityAddress || cityAddress === "")
      newErrors.cityAddress = "Wpisz miejscowość";
      else if (!phoneAddress || phoneAddress === "")
      newErrors.phoneAddress = "Wpisz nr telefonu";
    else if (!emailAddress || emailAddress === "")
      newErrors.emailAddress = "Wpisz firmoy adres e-mail";
 
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const formErrors = validateForm();
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      console.log(forms);
    }
  };
  return (
    <div className="settingsInlineBox">
      <div className="settingsLeftBox">
      
        <Form>
          <Row className="settingsBlock">
          <p>DANE FIRMY</p>
            <Form.Group
            //  as={Col}
           //   md="4"
            
            >
              <Form.Label className="titleInput">
                <b>NAZWA FIRMY</b>
              </Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="Wpisz nazwę firmy"
                name="nameCompany"
              //  id="nameComapny"
                value={forms.nameCompany || ""}
                onChange={(e) => getCompany("nameCompany", e.target.value)}
                isInvalid={!!errors.nameCompany}
              />
              <Form.Control.Feedback type="invalid">
                Wpisz nazwę firmy
              </Form.Control.Feedback>
            </Form.Group>
         
            <Form.Group
            //   as={Col}
           //    md="4"
           
            >
              <Form.Label className="titleInput">
                <b>NIP</b>
              </Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="NIP"
                name="NIP"
               // id="NIP"
                value={forms.NIP || ""}
                onChange={(e) => getCompany("NIP", e.target.value)}
                isInvalid={!!errors.NIP}
              />
              <Form.Control.Feedback type="invalid">
                Wpisz NIP
              </Form.Control.Feedback>
            </Form.Group>
        
            <Form.Group
          //    as={Col}
          //     md="4"
             
            >
              <Form.Label className="titleInput">
                <b>Ulica i nr</b>
              </Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="Wpisz ulicę"
                name="streetAddress"
               // id="streetAddress"
                value={forms.streetAddress || ""}
                onChange={(e) => getCompany("streetAddress", e.target.value)}
                isInvalid={!!errors.streetAddress}
              />
              <Form.Control.Feedback type="invalid">
                Wpisz ulicę i nr.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group
          //    as={Col}
          //     md="4"
             
            >
              <Form.Label className="titleInput">
                <b>Kod Pocztowy</b>
              </Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="Wpisz kod Pocztowy"
                name="zippAddress"
            
                value={forms.zippAddress || ""}
                onChange={(e) => getCompany("zippAddress", e.target.value)}
                isInvalid={!!errors.zippAddress}
              />
              <Form.Control.Feedback type="invalid">
                Wpisz kod Pocztowy
              </Form.Control.Feedback>
              </Form.Group>
            <Form.Group>
              <Form.Label className="titleInput">
                <b>Miejscowość</b>
              </Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="Wpisz miejscowość"
                name="cityAddress"
             
                value={forms.cityAddress || ""}
                onChange={(e) => getCompany("cityAddress", e.target.value)}
                isInvalid={!!errors.cityAddress}
              />
              <Form.Control.Feedback type="invalid">
                Wpisz miejscowość
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group
          //    as={Col}
          //     md="4"
             
            >
              <Form.Label className="titleInput">
                <b>Telefon</b>
              </Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="Wpisz telefon"
                name="phoneAddress"
          
                value={forms.phoneAddress || ""}
                onChange={(e) => getCompany("phoneAddress", e.target.value)}
                isInvalid={!!errors.phoneAddress}
              />
              <Form.Control.Feedback type="invalid">
              Wpisz firmowy telefon
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group
          //    as={Col}
          //     md="4"
             
            >
              <Form.Label className="titleInput">
                <b>Email</b>
              </Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="Wpisz email"
                name="emailAddress"
          
                value={forms.emailAddress || ""}
                onChange={(e) => getCompany("emailAddress", e.target.value)}
                isInvalid={!!errors.emailAddress}
              />
              <Form.Control.Feedback type="invalid">
              Wpisz firmowy email
              </Form.Control.Feedback>
            </Form.Group>
          
          </Row>
          <Row>
            <Form.Group controlId="submit">
              <Button type="submit" onClick={handleSubmit}>
                Submit
              </Button>
            </Form.Group>
          </Row>
        </Form>
     
      </div>
      <div className="settingsRightBox">
      
      <Form>
        <Row className="settingsBlock">
        <p>DANE FIRMY</p>
          <Form.Group
          //  as={Col}
         //   md="4"
          
          >
            <Form.Label className="titleInput">
              <b>NAZWA FIRMY</b>
            </Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="Wpisz nazwę firmy"
              name="nameCompany"
            //  id="nameComapny"
              value={forms.nameCompany || ""}
              onChange={(e) => getCompany("nameCompany", e.target.value)}
              isInvalid={!!errors.nameCompany}
            />
            <Form.Control.Feedback type="invalid">
              Wpisz nazwę firmy
            </Form.Control.Feedback>
          </Form.Group>
       
          <Form.Group
          //   as={Col}
         //    md="4"
         
          >
            <Form.Label className="titleInput">
              <b>NIP</b>
            </Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="NIP"
              name="NIP"
             // id="NIP"
              value={forms.NIP || ""}
              onChange={(e) => getCompany("NIP", e.target.value)}
              isInvalid={!!errors.NIP}
            />
            <Form.Control.Feedback type="invalid">
              Wpisz NIP
            </Form.Control.Feedback>
          </Form.Group>
      
          <Form.Group
        //    as={Col}
        //     md="4"
           
          >
            <Form.Label className="titleInput">
              <b>Ulica i nr</b>
            </Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="Wpisz ulicę"
              name="streetAddress"
             // id="streetAddress"
              value={forms.streetAddress || ""}
              onChange={(e) => getCompany("streetAddress", e.target.value)}
              isInvalid={!!errors.streetAddress}
            />
            <Form.Control.Feedback type="invalid">
              Wpisz ulicę i nr.
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group
        //    as={Col}
        //     md="4"
           
          >
            <Form.Label className="titleInput">
              <b>Kod Pocztowy</b>
            </Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="Wpisz kod Pocztowy"
              name="zippAddress"
          
              value={forms.zippAddress || ""}
              onChange={(e) => getCompany("zippAddress", e.target.value)}
              isInvalid={!!errors.zippAddress}
            />
            <Form.Control.Feedback type="invalid">
              Wpisz kod Pocztowy
            </Form.Control.Feedback>
            </Form.Group>
          <Form.Group>
            <Form.Label className="titleInput">
              <b>Miejscowość</b>
            </Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="Wpisz miejscowość"
              name="cityAddress"
           
              value={forms.cityAddress || ""}
              onChange={(e) => getCompany("cityAddress", e.target.value)}
              isInvalid={!!errors.cityAddress}
            />
            <Form.Control.Feedback type="invalid">
              Wpisz miejscowość
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group
        //    as={Col}
        //     md="4"
           
          >
            <Form.Label className="titleInput">
              <b>Telefon</b>
            </Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="Wpisz telefon"
              name="phoneAddress"
        
              value={forms.phoneAddress || ""}
              onChange={(e) => getCompany("phoneAddress", e.target.value)}
              isInvalid={!!errors.phoneAddress}
            />
            <Form.Control.Feedback type="invalid">
            Wpisz firmowy telefon
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group
        //    as={Col}
        //     md="4"
           
          >
            <Form.Label className="titleInput">
              <b>Email</b>
            </Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="Wpisz email"
              name="emailAddress"
        
              value={forms.emailAddress || ""}
              onChange={(e) => getCompany("emailAddress", e.target.value)}
              isInvalid={!!errors.emailAddress}
            />
            <Form.Control.Feedback type="invalid">
            Wpisz firmowy email
            </Form.Control.Feedback>
          </Form.Group>
        
        </Row>
        <Row>
          <Form.Group controlId="submit">
            <Button type="submit" onClick={handleSubmit}>
              Submit
            </Button>
          </Form.Group>
        </Row>
      </Form>
    
    </div>
  
    </div>
  );
};
export default SettingsInfo;
