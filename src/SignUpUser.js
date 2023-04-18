import React from "react";
import { Button, Container, Form } from "react-bootstrap";
import "./App.css";



const SignUpUser = () => {
  return (
  
  
   <Container className="signCenter">
  <div className="signUpPanel">
   {/*  <h1 className="getCenter">YORK CRM</h1> */}
    <Form >
      <Form.Label>
        <b>Login</b>
      </Form.Label>

      <div className="input-group">
        <span className="input-group-addon">
          <img
            className="imgTable"
            src="https://img.icons8.com/windows/32/null/gender-neutral-user.png"
            alt="wpisz login"
          />
        </span>
        <Form.Control
          required
          type="text"
          placeholder="Wpisz login"
          name="login"
          id="login"
        />
      </div>
      <Form.Label>
        <br />
        <b>Wpisz hasło</b>
      </Form.Label>

      <div className="input-group">
        <span className="input-group-addon">
          <img
            className="imgTable"
            src="https://img.icons8.com/windows/32/null/user-lock--v1.png"
            alt="Hasło"
          />
        </span>

        <Form.Control
          required
          type="password"
          placeholder="Wpisz hasło"
          name="password"
          id="password"
        />
      </div>

      <p className="getRightSign">
        <Button className="mt-3" variant="outline-secondary">
        Przypomnij hasło
          <img
            className="imgTable ms-2"
            src="https://img.icons8.com/dotty/80/null/re-enter-pincode.png"
            alt="Przypomnij hasło"
          />
        
        </Button>
        <Button className="ms-4 mt-3" variant="outline-secondary">
        Zaloguj 
          <img
            className="imgTable ms-2"
            src="https://img.icons8.com/ios-filled/50/null/login-rounded-right.png"
            alt="znajdz"
          />
          
        </Button>
      </p>
    </Form>
    
    <br />


    </div>
    
    <a  href="wwww.k2webdev.pl" target="_blank" className="k2webdevLink">K2<span className="orange">web</span>dev</a>
    </Container>
  );
};
export default SignUpUser;
