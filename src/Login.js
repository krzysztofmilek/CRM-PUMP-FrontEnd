import React from "react";
import { useState } from "react";
import { Button, Container, Form, Alert } from "react-bootstrap";
import "./components/css/Login.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";



const Login = (props) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [loginMessage, setLoginMessage] = useState("");
  const navigate = useNavigate();
  
  const handleInputChange = (e) => {
    const target = e.target;
    const name = target.name;

    setFormData({
      ...formData,
      [name]: target.value,
    });
  };
  
  const handleSubmit = (e) => {
        e.preventDefault();
    axios.post("http://localhost:8080/login", {
        email: formData.email,
        password: formData.password,
        })
       .then((res) => {
          if (res.data.error) {
            console.log(res.data.error.status);
          setLoginMessage(res.data.message);
        } else  {
           localStorage.setItem("user", JSON.stringify(res.data)); 
            const redirectToHome = () => {
              navigate("/home", {
                  state: {
                      name: res.data.name,
                      access: res.data.admin,
                      token: res.data.jwt,
                  },
              });
            }
            redirectToHome()
                     
          }
        })}
      
     
  

  return (
    <Container className="signCenter" method="POST">
      <div className="signUpPanel">
        <Form onSubmit={handleSubmit}>
          {loginMessage &&  
          <Alert key='danger' variant='danger'>   {loginMessage}  </Alert>
          
          
          
          }

          <div className="input-group">
            <span className="input-group-addon">
              <img
                className="imgLoginUser"
                src="https://img.icons8.com/external-others-inmotus-design/67/null/external-At-virtual-keyboard-others-inmotus-design-3.png"
                alt="wpisz login"
              />
            </span>
            <input
              className="inputLogin"
              required
              type="text"
              placeholder="Wpisz Email"
              name="email"
              id="email"
              onChange={handleInputChange}
              value={formData.email}
            />
          </div>

          <div className="input-group">
            <span className="input-group-addon">
              <img
                className="imgLoginUser"
                src="https://img.icons8.com/windows/32/null/user-lock--v1.png"
                alt="Hasło"
              />
            </span>

            <input
              className="inputLogin"
              required
              type="password"
              placeholder="Wpisz hasło"
              name="password"
              id="password"
              onChange={handleInputChange}
              value={formData.password}
              autoComplete="true"
            />
          </div>

          <p className="getCenter">
            <Button
              className="ms-0 mt-4  buttonLogin"
              variant="outline-success"
              onClick={handleSubmit}
            >
              Zaloguj
              <img
                className="imgLogin ms-2"
                src="https://img.icons8.com/ios-filled/50/null/login-rounded-right.png"
                alt="znajdz"
              />
            </Button>
            <a href="wwww.k2webdev.pl" target="_blank" className="k2webdevLink">
              K2<span className="orange">web</span>dev
            </a>
          </p>
        </Form>
      </div>
    </Container>
  );
};
export default Login;
