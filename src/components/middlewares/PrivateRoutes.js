import React from 'react';
import {  Navigate, Outlet } from 'react-router-dom';

export default function PrivateRoutes() {


    let auth ={'user':localStorage.getItem('user')}
  return (
    auth.user ? <Outlet />: <Navigate to="/login" />
  )
}
