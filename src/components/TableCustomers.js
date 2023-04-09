
import React, { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import { Button, Container } from 'react-bootstrap';
//import CustomerCard from './CustomerCard';
import AnaliticUserTop from './AnaliticUserTop';




const TableCustomers = (props) => {
  // eslint-disable-next-line 
  const [cust, setCust] = useState({});

  const start = (new Date().toISOString())
  console.log(start)
  console.log(props.customer)

  const handleShow = (cust) => {
    setCust(cust);
  };

 useEffect(() => {
    props.getCustomers();
    // eslint-disable-next-line
  }, []) 

  return (
    <Container>
  
      <div className='up'>
        <AnaliticUserTop />
       
      </div>
      <div className='down'>
        <hr />

        <p className="getLeft">PRZETERMINOWANE ZADANIA </p>

       <Table variant="light" hover bordered size="sm">
         <tbody >
            {props.customer.filter((cust) => {
              return cust.data.substring(0, 10) < start.substring(0, 10) & cust.agreement_1 === true
            }).map((cust, index) => (
              <tr className='red' key={index} >
                <td className="col-3 tableFontSize">{cust.name}</td>
                <td className="col-2 tableFontSize" >{cust.phone}</td>
                <td className="col-2 tableFontSize" >{cust.email}</td>
                <td className="col-2 tableFontSize" >{cust.data.substring(0, 10)}</td>
                <td className="col-3 getRight"> <Button variant="success" size="sm" onClick={() => handleShow(cust)} >Szczegóły</Button> </td>
              </tr>
            ))
            }
         </tbody>
       </Table>
        <p className="getLeft"> DZISIEJSZE ZADANIA</p>
       <Table variant="light" striped bordered hover className="fullWidth">
        <tbody>
            {props.customer.filter((cust) => {
              return cust.data.substring(0, 10) === start.substring(0, 10) & cust.agreement_1 === true
            }).map((cust, index) => (
              <tr key={index} >
                <td className="col-3 tableFontSize">{cust.name}</td>
                <td className="col-2 tableFontSize">{cust.phone}</td>
                <td className="col-2 tableFontSize">{cust.email}</td>
                <td className="col-2 tableFontSize">{cust.data.substring(0, 10)}</td>
                <td className="col-3 getRight"><Button variant="success " size="sm" onClick={() => handleShow(cust)}>Szczegóły</Button> </td>
              </tr>
            ))
            }
        </tbody>
       </Table>

        <p className="getLeft"> NADCHODZĄCE ZADANIA</p>
        <Table variant="light" striped bordered hover className="fullWidth">

          <tbody>
            {props.customer.filter((cust) => {
              return cust.data.substring(0, 10) > start.substring(0, 10) & cust.agreement_1 === true
            }).map((cust, index) => (
              <tr key={index} >
                <td className="col-3 tableFontSize">{cust.name}</td>
                <td className="col-2 tableFontSize">{cust.phone}</td>
                <td className="col-2 tableFontSize">{cust.email}</td>
                <td className="col-2 tableFontSize">{cust.data.substring(0, 10)}</td>
                <td className="col-3 getRight"><Button variant="success " size="sm" onClick={() => handleShow(cust)} >Szczegóły</Button> </td>
              </tr>
            ))
            }
          </tbody>
        </Table>
      </div>
    </Container >
  )

}
export default TableCustomers;
