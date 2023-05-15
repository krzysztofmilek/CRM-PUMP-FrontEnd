import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { useEffect } from 'react';
import {  Toast, ToastContainer } from 'react-bootstrap';
import {Row, Col } from 'react-bootstrap'

const Logout = () => {
const [show, setShow] = useState(false)
    const navigate = useNavigate();

    const logout =() =>{
    localStorage.removeItem("user"); 
    setShow(true);
    const redirectToHome = () => {
      navigate("/login");
 
    }
    redirectToHome()
    
    }



    useEffect(() => {
      
      logout();

      
       // eslint-disable-next-line
    }, []);
   




  return (
    <div>

<Row>
       <Col xs={6}>
            <ToastContainer
              className="p-3"
              position="top-end"
              style={{ zIndex: 1 }}
            >
              <Toast
                onClose={() => setShow(false)}
                show={show}
                delay={5000}
                autohide
                className="success"
             
              >
                <Toast.Header>
                  <img
                    src="holder.js/20x20?text=%20"
                    className="rounded me-2 "
                    alt=""
                  />
                  <strong className="me-auto">Wylogowano poprawnie</strong>
                </Toast.Header>
                <Toast.Body  >Wylogowano poprawnie</Toast.Body>
                <Toast.Footer  >Wylogowano poprawnie</Toast.Footer>
              </Toast>
            </ToastContainer>
        
           
          </Col>
    
        </Row>


    </div>
  )
}

export default Logout