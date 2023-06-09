import { useState, useEffect } from "react";
import React from "react";
import { Table, Button, Container } from "react-bootstrap";
import axios from "axios";
import ModalDeleteCustomer from "../modals/ModalDeleteCustomer";
import ModalEditCustomer from "../modals/ModalEditCustomer";
import Menu from "./Menu";
import CustomerCard from "./CustomerCard";
import "../css/Customers.css";
import Footer from "./Footer";
import OverlayTrig from "../overLay/OverlayTrig";

const Customers = (props) => {
  const [customers, setCustomers] = useState([]);
  const [customer, setCustomer] = useState([]);
  const [search, setSearch] = useState("");
  const [show, setShow] = useState(false);
  const [showButton, setShowButton] = useState(false);

  const getCustomers = async () => {
    const customer = await axios.get("http://localhost:8080/customer/");
    setCustomers(customer.data);
    console.log(customers)
  };

  const clear = () => {
    setSearch("");
    document.getElementById("formSearch").reset();
  };

  const findCustomer = (e) => {
    let getFindCustomer = e.target.value;
    let lowerGetFindCustomer = getFindCustomer.toLowerCase();
    setSearch(lowerGetFindCustomer);
  };

  const getCustomerData = (cust) => {
    setCustomer(cust);
   // setShow(true);
    setShowButton(true);
  };

  useEffect(() => {
    getCustomers();
    // eslint-disable-next-line
  }, []);
  return (
    <Container>
      <Menu />
      <div className="">
        <p className="tittle">Dodaj nowego Klienta</p>
        <hr />
        <CustomerCard
          getCustomers={props.getCustomers}
          getCustomer={customer}
          show={show}
          showButton={showButton}
          setShow={setShow}
          showClass="hidden"
          showClassButton="show"
        />
      </div>
      <div className="down">
        <p className="tittle">Wyszukaj Klienta</p>
        <hr />
        <Table variant="light" striped bordered hover>
          <thead>
            <tr>
              <td>
                <div className="inputGroup">
                  <form id="formSearch" className="formSearch">
                    <span className="imgSearchBackground">
                      <img
                        className="imgSearch"
                        src="https://img.icons8.com/small/35/null/find-user-male.png"
                        alt="znajdz"
                      />
                    </span>
                    <input
                      type="text"
                      className="input_Search"
                      name="inputSearch"
                      id="inputSearch"
                      onChange={findCustomer}
                    />

                    <div className="getCenterReset">
                      <Button variant="outline-success" onClick={clear}>
                        Reset
                      </Button>
                    </div>
                  </form>
                </div>
              </td>
            </tr>
          </thead>
        </Table>

        <p className="tittle">Lista Klientów</p>
        <hr />

        <Table variant="light" striped bordered hover className="fullWidth">
          <tbody>
            {customers
              .filter((cust) => {
                return search.toLowerCase() === ""
                  ? cust
                  : cust.name.toLowerCase().includes(search) ||
                      cust.email.toLowerCase().includes(search);
              })
              .map((cust, index) => (
                <tr key={index}>
                  <td className="col-3 tableFontSize">{cust.name}</td>
                  <td className="col-2 tableFontSize">{cust.phone}</td>
                  <td className="col-2 tableFontSize">{cust.email}</td>
                  <td className="col-2 tableFontSize">
                    {cust.data.substring(0, 10)}
                  </td>
                  <td className="col-1 getCenter">
                    <OverlayTrig
                      imagePath="https://img.icons8.com/windows/35/null/checked-user-male--v1.png"
                      toltip="Pobierz Dane Klienta"
                      onClick={(e) => {
                        getCustomerData(cust);
                      }}
                    />
                  </td>
                  <td className="col-1 getCenter">
                    <ModalEditCustomer
                      cust={cust}
                      getCustomers={getCustomers}
                    />
                  </td>
                  <td className="col-1 getCenter">
                    <OverlayTrig
                      imagePath="https://img.icons8.com/fluency-systems-regular/48/null/order-history.png"
                      toltip="Historia Kontaktów z Klientem"
                    />
                  </td>
                  <td className="col-1 getCenter">
                    <ModalDeleteCustomer post={cust} getUsers={getCustomers} />
                  </td>
                </tr>
              ))}
          </tbody>
        </Table>
      </div>
      <Footer />
    </Container>
  );
};
export default Customers;
