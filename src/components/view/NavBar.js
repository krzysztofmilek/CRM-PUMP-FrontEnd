import React from 'react';
import { Button } from 'react-bootstrap';
import {Link} from "react-router-dom";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";


function NavBar(props) {
  const userToken = JSON.parse(localStorage.getItem('user'));
 
  return (
    <div className="getCenter">
      
  
      <div className='loginNavBar' >
        <p >
      {userToken.name} { !userToken.access? "Użytkownik" : "Administrator  "}
     <OverlayTrigger
        key="top2"
        placement="top"
        overlay={<Tooltip id="tooltip-top">Edytuj swoje dane</Tooltip>}
      >
     <img className="imgSetting" src="https://img.icons8.com/pulsar-line/48/null/settings.png" alt="Ustawinia"/>
     </OverlayTrigger>
     <OverlayTrigger
        key="top"
        placement="top"
        overlay={<Tooltip id="tooltip-top">Wyloguj</Tooltip>}
      >

     <img className="imgSetting" src="https://img.icons8.com/ios-filled/50/null/logout-rounded.png" alt="wyloguj"/>    
     </OverlayTrigger> 
     </p>

      </div>
      <Link to="/home"><Button variant='outline-success' className="btnFull">Home</Button></Link>
      <Link to="/lead"><Button variant='outline-success' className="btnFull">Nowy Lead</Button></Link>
      <Link to="/customers"><Button variant='outline-success' className="btnFull">Klienci</Button></Link>
      { userToken.access? ( <Link to="/analitics"><Button variant='outline-success' className="btnFull">Analityka</Button></Link>): null}
      <Link to="/chance"><Button variant='outline-success' className="btnFull">Giełda Leadów</Button></Link>
      { userToken.access? ( <Link to="/users"><Button variant='outline-success' className="btnFull">Użytkownicy</Button>  </Link>): null}

    
    </div>

  )  
}
export default NavBar

