import { useState, useEffect } from "react";
import React from "react";
import { Table, Button, Container,OverlayTrigger, Tooltip } from "react-bootstrap";
import axios from "axios";
import ModalDeleteCustomer from "../modals/ModalDeleteCustomer";
import ModalEditCustomer from "../modals/ModalEditCustomer";
import Menu from "./Menu";
import CustomerCard from "./CustomerCard";


const Customers = () => {
  const [customers, setCustomers] = useState([]);

  const [editCustomer, setEditCustomer] = useState({});
  const [search, setSearch] = useState("");

  const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];

 


// funny get full Date
const getFD = new Date();
let mon = months[getFD.getMonth()];
let month = mon.toLowerCase()
console.log(month)
const getDay = ((getFD.getDate() <10)? "0"+ getFD.getDate():getFD.getDate());
const gM = getFD.getMonth();
const gMAddOne = gM+1;
const getMonth = ((gMAddOne <10)?"0"+gMAddOne : "");
const getYear = getFD.getFullYear();
const dateSubString = (getYear +"-"+getMonth+"-"+ getDay);
const getTodey = dateSubString.toString();





  const getCustomer = (e) =>
    setEditCustomer((prevState) => ({
      ...prevState,
      [e.target.city]: e.target.value,
      [e.target.email]: e.target.value,
      [e.target.name]: e.target.value,
      [e.target.phone]: e.target.value,
      [e.target.street]: e.target.value,
      [e.target.zip]: e.target.value,
      [e.target.agreement_1]: true,
      [e.target.data]: getTodey,
      [e.target.NIP]: e.target.value,
      [e.target.nameCompany]: e.target.value,
    }));


  const getCustomers = async () => {
    const customer = await axios.get("http://localhost:8080/customer/");
    setCustomers(customer.data);
  };

  useEffect(() => {
    getCustomers();
    // eslint-disable-next-line
  }, []);
  const findCustomer = (e) => {
    let getFindCustomer = e.target.value;
    let lowerGetFindCustomer = getFindCustomer.toLowerCase();
    setSearch(lowerGetFindCustomer);
  };

  const clear = () => {
    setSearch("");
    document.getElementById("formSearch").reset();
  };

  return (
    <Container>
  <Menu />
      <div className="">
        <p className="tittle">Dodaj nowego Klienta</p>
        <hr />
        <CustomerCard />
      
      </div>
      <div className="down">
        <p className="tittle">Wyszukaj Klienta</p>
        <hr />
        <Table variant="light" striped bordered hover className="fullWidth">
          <thead>
            <tr>
              <td>
                <div className="input-group">
                <form id="formSearch" className="input-search">
                 
                    
                    <img
                      className="imgTable"
                      src="https://img.icons8.com/small/35/null/find-user-male.png"
                      alt="znajdz"
                    />
                      <input          
                      type="text"
                      className="input-search"
                      name="inputSearch"
                      id="inputSearch"
                      onChange={findCustomer}
                    />
                  </form>
                </div>
             
                <Button variant="outline-success" onClick={clear}>
                Reset
                </Button>
              </td>
            </tr>
          </thead>
        </Table>

        <p className="tittle">Lista Klientów</p>
        <hr />

        {/* --------------------------------------------------------- tabela */}
        <Table variant="light" striped bordered hover className="fullWidth">
          <tbody>
            {customers
              .filter((cust) => {
                return search.toLowerCase() === ""
                  ? cust : cust.name.toLowerCase().includes(search) ||
                      cust.email.toLowerCase().includes(search) ||
                      cust.NIP.toLowerCase().includes(search);
              })
              .map((cust, index) => (
                <tr key={index}>
                  <td className="col-3 tableFontSize">{cust.name}</td>
                  <td className="col-2 tableFontSize">{cust.phone}</td>
                  <td className="col-2 tableFontSize">{cust.email}</td>
                  <td className="col-2 tableFontSize">{cust.data.substring(0,10)}
                  </td>
                  <td className="col-1 getCenter">
                    <OverlayTrigger
                      key="top"
                      placement="top"
                      overlay={
                        <Tooltip id="tooltip-top">Pobierz Dane Klienta</Tooltip>
                      }
                    >
                      <img
                        className="imgTable"
                        src="https://img.icons8.com/windows/35/null/checked-user-male--v1.png"
                        alt="Pobierz Dane Klienta"
                    
                      />
                    </OverlayTrigger>
                  </td>
                  <td className="col-1 getCenter">
                  <ModalEditCustomer cust={cust} getCustomers={getCustomers} />
                  </td>
                  <td className="col-1 getCenter">
                    <OverlayTrigger
                      key="top"
                      placement="top"
                      overlay={
                        <Tooltip id="tooltip-top">
                          Historia Kontaktów z Klientem
                        </Tooltip>
                      }
                    >
                      <img
                        className="imgTable"
                        src="https://img.icons8.com/fluency-systems-regular/48/null/order-history.png"
                        alt="Historia Klienta"
                     
                      />
                    </OverlayTrigger>
                  </td>
                  <td>
                 
<ModalDeleteCustomer post={cust} getUsers={getCustomers} />
                  </td>
                </tr>
              ))}
          </tbody>
        </Table>
      </div>
    </Container>
  );
};
export default Customers;
