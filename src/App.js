import "./App.css";
import axios from "axios";
import { useState } from "react";
import AppR from "./components/routes/AppR";

function App() {
  const [customers, setCustomers] = useState([]);

  const getCustomers = async () => {
    const customer = await axios.get("http://localhost:8080/customers");

    setCustomers(customer.data);
  };
  return (
    <div className="App">
      <AppR getCustomers={getCustomers} customers={customers} />
    </div>
  );
}

export default App;
