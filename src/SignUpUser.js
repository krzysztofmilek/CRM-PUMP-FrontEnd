import React from "react";
import { Button, Form } from "react-bootstrap";
import "./App.css";



const SignUpUser = () => {
  return (
  
  
   
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
            src="https://img.icons8.com/ios/50/null/password--v1.png"
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
          <img
            className="imgTable me-2"
            src="https://img.icons8.com/wired/20/null/reminder.png"
            alt="znajdz"
          />
          Przypomnij hasło
        </Button>
        <Button className="ms-4 mt-3" variant="outline-secondary">
          <img
            className="imgTable me-2"
            src="https://img.icons8.com/ios-filled/50/null/login-rounded-right.png"
            alt="znajdz"
          />
          Zaloguj
        </Button>
      </p>
    </Form>
    
    {/*<br />
 <p className="getRight">
<a href="wwww.k2webdev.pl" target="_blank"><span className="black">K2</span><span className="orange">web</span><span className="black">dev</span></a>
</p>
 */}

    </div>
    

  );
};
export default SignUpUser;
