import './App.css';
import axios from 'axios';
import { useState } from 'react';
//import TableCustomers from './components/TableCustomers';
import NavBar from './components/NavBar';
import AppR from './components/routes/AppR';
import { Container } from 'react-bootstrap';



function App() {
  const [customers, setCustomers] = useState([])

  const getCustomers = async () => {
    const customer = await axios.get('http://localhost:8080/customers');

    setCustomers(customer.data);


  }
  return (
    <div className="App">
<Container className="containerBody">
      <NavBar />
      <AppR getCustomers={getCustomers}
        customers={customers} />

</Container>

    </div>
  );
}

export default App;

