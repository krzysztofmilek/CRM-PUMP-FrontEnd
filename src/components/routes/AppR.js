import React from 'react';
import {Routes,  Route } from "react-router-dom";
import Customers from '../view/Customers';
import Lead from '../view/Lead';
import Analitics from '../view/Analitics';
import Chance from '../view/Chance';
import Users from '../view/Users'
import TableCustomers from '../view/TableCustomers';
import PrivateRoutes from '../middlewares/PrivateRoutes';
import Settings from '../view/Settings';


import Login from '../../Login';



const AppR = (props) => {
    
    return (
  
        <Routes>
        <Route  element={<PrivateRoutes />} >
             <Route  path="/home" element={<TableCustomers customer={props.customers}     getCustomers={props.getCustomers} resData={props.state}/> } exact /> 
             <Route path="/customers" element={<Customers customer={props.customers} getCustomers={props.getCustomers} />} /> 
             <Route path="/lead" element={<Lead />} /> 
             <Route path="/analitics" element={<Analitics />} /> 
             <Route path="/chance" element={ <Chance />} /> 
             <Route path="/users" element={<Users />} /> 
             <Route path="/settings" element={<Settings/>} /> 
         </Route>
        <Route path="/login" element={<Login />} /> 
        <Route path="/" element={<Login />} /> 
      </Routes>



  

    );

}
export default AppR;