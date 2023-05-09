import React from 'react';
import Menu from './Menu';
import CustomerCard from "./CustomerCard";
import { Container } from 'react-bootstrap';



const Lead = () => {

  return (
    <Container>

        <Menu />
        <p className="tittle">Dodaj nowego Klienta</p>
        <hr />
        <CustomerCard />

    </Container>
  
  )

}
export default Lead;
