import React from 'react';
import {
  Routes,
  Route,
 
} from "react-router-dom";
import Customers from '../view/Customers';
import Lead from '../view/Lead';
import Analitics from '../view/Analitics';
import Chance from '../view/Chance';
import Users from '../view/Users'
import Details from '../view/Details'
import TableCustomers from '../TableCustomers';


const AppR = (props) => {
    return (
        <Routes>
        <Route  path="/" element={<TableCustomers customer={props.customers} getCustomers={props.getCustomers} />} /> 
         <Route path="/customers" element={<Customers customer={props.customers} getCustomers={props.getCustomers} />} /> 
         <Route path="/lead" element={<Lead />} /> 
         <Route path="/analitics" element={<Analitics />} /> 
         <Route path="/chance" element={<Chance />} /> 
         <Route path="/users" element={<Users />} /> 
         <Route path="/details" element={<Details />} /> 
      </Routes>


  

    );

}
export default AppR;