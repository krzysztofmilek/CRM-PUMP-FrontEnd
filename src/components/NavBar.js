import React from 'react';
import { Button } from 'react-bootstrap';
import {Link} from "react-router-dom";


function NavBar(props) {

  return (
    <div className="getCenter">
      
  
      <div className='loginNavBar' >
        Zalogowany: Krzysztof Miłek
      </div>
      <Link to="/"><Button variant='success' className="btnFull">Home</Button></Link>
      <Link to="/lead"><Button variant='success' className="btnFull">Nowy Lead</Button></Link>
      <Link to="/customers"><Button variant='success' className="btnFull">Klienci</Button></Link>
      <Link to="/analitics"><Button variant='success' className="btnFull">Analityka</Button></Link>
      <Link to="/chance"><Button variant='success' className="btnFull">Giełda Leadów</Button></Link>
      <Link to="/users"><Button variant='success' className="btnFull">Użytkownicy</Button>  </Link>
    
    </div>

  )
}
export default NavBar

