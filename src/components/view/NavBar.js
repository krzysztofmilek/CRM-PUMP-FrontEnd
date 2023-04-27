import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";

function NavBar(props) {
  const userToken = JSON.parse(localStorage.getItem("user"));

  return (
    <div className="getCenter">
      <div className="loginNavBar">
        <p>
          {!userToken ? "" : userToken.name}

          {!userToken.access ? "Użytkownik" : "Administrator  "}
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
      <div className="mainMenu">
        <Link to="/home" className="btnFull">
          {" "}
          <div>
              <img
                className="imgMenu"
                src="https://img.icons8.com/cotton/64/null/home--v3.png"
                alt="analitics"
              />
            </div>
            <div>Home</div>{" "}
        </Link>
        <Link to="/lead" className="btnFull">
        <div>
              <img
                className="imgMenu"
                src="https://img.icons8.com/cotton/64/null/receive-cash--v6.png"
                alt="analitics"
              />
            </div>
            <div>Nowy Lead</div>{" "}
        </Link>
        <Link to="/customers" className="btnFull">
        <div>
              <img
                className="imgMenu"
                src="https://img.icons8.com/cotton/64/null/conference-call.png"
                alt="analitics"
              />
            </div>
            <div>Klienci</div>{" "}
        </Link>
        <Link to="/chance" className="btnFull">
        <div>
              <img
                className="imgMenu"
                src="https://img.icons8.com/external-outline-geotatah/64/null/external-chance-talent-management-outline-geotatah.png"
                alt="analitics"
              />
            </div>
            <div> Giełda</div>{" "}
            
        </Link>

        {userToken.access ? (
          <Link to="/analitics" className="btnFull">
            <div>
              <img
                className="imgMenu"
                src="https://img.icons8.com/cotton/64/null/analytics.png"
                alt="analitics"
              />
            </div>
            <div> Analityka</div>{" "}
          </Link>
        ) : null}

        {userToken.access ? (
          <Link to="/users" className="btnFull">
          <div>
              <img
                className="imgMenu"
                src="https://img.icons8.com/windows/64/null/gender-neutral-user.png"
                alt="analitics"
              />
            </div>
            <div>Użytkownicy</div>{" "}
          </Link>
        ) : null}
      </div>
    </div>
  );
}
export default NavBar;
