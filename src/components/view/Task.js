import React from 'react'
import { Form, Row, Col, InputGroup, Button } from 'react-bootstrap';
import "../css/Task.css"


function Task(props) {
    const [editCustomer, setEditCustomer] = useState(null);

    const getCustomer = (e) =>
    setEditCustomer((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
      [e.target.phone]: e.target.value,
      [e.target.position]: e.target.value,
      [e.target.email]: e.target.value,
      [e.target.login]: e.target.value,
   
    }));
  return (
    <div>
         <p className="title">Przeglądaj zadania</p>
        <hr />
   <Form  className="getLeft" >
          <Row className="mb-3">
            <Form.Group
              as={Col}
              md="4" 
            >
              <Form.Label className="textCustomer">
        
                  Imię nazwisko osoby kontaktowej 
              
              </Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="imię i nazwisko"
                name="name"
                id="name"
                     
              
              />
           
            </Form.Group>
            <Form.Group
              as={Col}
              md="4" 
            >
              <Form.Label className="textCustomer">Nazwa firmy </Form.Label>
              <Form.Control
                type="text"
                placeholder="Nazwa firmy"
                name="nameCompany"
                id="nameCompany"
             
            
              />
      
            </Form.Group>
            <Form.Group
              as={Col}
              md="4" 
            >
              <Form.Label className="textCustomer">NIP</Form.Label>
              <Form.Control
                type="text"
                placeholder="NIP"
                name="NIP"
                id="NIP"
              
           
              />
  
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group
              as={Col}
              md="4" 
            >
              <Form.Label className="textCustomer">
              
                  Telefon 
                
              </Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="Telefon"
                name="phone"
                id="phone"
           
              
              />
      
            </Form.Group>
            <Form.Group
              as={Col}
              md="4" 
            >
              <Form.Label className="textCustomer">
           
                  Adres e-mail 
            
              </Form.Label>
              <InputGroup hasValidation>
                <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
                <Form.Control
                  type="text"
                  placeholder="Adres e-mail"
                  aria-describedby="inputGroupPrepend"
                  name="email"
                  id="email"
             
             
              />
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
              
              
              />
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
           
               
              />
            </Form.Group>
            <Form.Group as={Col} md="4">
              <Form.Label className="textCustomer">Ulica, nr domu i mieszkania</Form.Label>
              <Form.Control
                type="text"
                placeholder="Ulica, nr domu i mieszkania"
                name="street"
                id="street"
               
              
              />
            </Form.Group>
          </Row>
          <Row className="mb-1">
        

<div>
            <Form.Group as={Col} md="3" className="mt-5 mb-5">
              <Button variant="outline-success" >
               Zapisz
              </Button>
            </Form.Group>
            </div>
            <div>
            <Form.Group as={Col} md="1" className="mt-5">
              <Button variant="outline-success">Dalej</Button>
            </Form.Group>
            </div>
          </Row>
        </Form>



    </div>
  )
}

export default Task