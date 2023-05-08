import React from "react";
import { useState } from "react";
import "../css/MobileBar.css";
import { Link } from "react-router-dom";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";

const MobileBar = (props) => {
  const userToken = JSON.parse(localStorage.getItem("user"));

  const [burgerClass, setBurgerClass] = useState("burger-bar unclicked");
  const [menu_class, setMenuClass] = useState("menu hidden");
  const [isMenuClicked, setIsMenuClicked] = useState(false);
  const updateMenu = () => {
    if (!isMenuClicked) {
      setBurgerClass("burger-bar clicked");
      setMenuClass("menu visible");
    } else {
      setBurgerClass("burger-bar unclicked");
      setMenuClass("menu hidden");
    }
    setIsMenuClicked(!isMenuClicked);
  };

  return (
    <div>
          <div className="loginNavBar">
          <p>
          {!userToken ? "" : userToken.name}

          {!userToken.access ? " Użytkownik" : " Administrator  "}
          <OverlayTrigger
            key="top2"
            placement="top"
            overlay={<Tooltip id="tooltip-top">Edytuj swoje dane</Tooltip>}
          >
            <img
              className="imgSetting"
              src="https://img.icons8.com/pulsar-line/48/null/settings.png"
              alt="Ustawinia"
            />
          </OverlayTrigger>
          <OverlayTrigger
            key="top"
            placement="top"
            overlay={<Tooltip id="tooltip-top">Wyloguj</Tooltip>}
          >
            <img
              className="imgSetting"
              src="https://img.icons8.com/ios-filled/50/null/logout-rounded.png"
              alt="wyloguj"
            />
          </OverlayTrigger>
        </p>
        </div>
      <nav>
        
        <div className="burger-logo"> CRM YORK</div>
        <div className="burger-menu" onClick={updateMenu}>
          <div className={burgerClass}></div>
          <div className={burgerClass}></div>
          <div className={burgerClass}></div>
          <div className={burgerClass}></div>
          
        </div>
      </nav>

      <div className={menu_class}>
      
   
            <div className="burger-menu-class">
           
          <Link to="/home"  className="burger-menu-class-link">
            Home
          </Link>
          </div>
          <div className="burger-menu-class">
          <Link to="/lead" className="burger-menu-class-link">
            Nowy Lead
          </Link>
          </div>
          <div className="burger-menu-class">
          <Link to="/customers" className="burger-menu-class-link">
            Klienci
          </Link>
          </div>
          <div className="burger-menu-class">
          <Link to="/chance" className="burger-menu-class-link">
            Giełda
          </Link>
          </div>
          <div className="burger-menu-class">

          {userToken.access ? (
            <Link to="/analitics" className="burger-menu-class-link">
              Analityka
            </Link>
          ) : null}
            </div>
          <div className="burger-menu-class">

          {userToken.access ? (
            <Link to="/users" className="burger-menu-class-link">
              Użytkownicy
            </Link>
          ) : null}
            </div>
          <div className="burger-menu-class">

          {userToken.access ? (
            <Link to="/settings" className="burger-menu-class-link">
              Ustawienia
            </Link>
          ) : null}
          </div>
        
      </div>
    </div>
  );
};
export default MobileBar;
