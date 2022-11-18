import React from 'react';
import { useParams, useLocation, Outlet } from 'react-router-dom';
 
export default function User(){
    const {name} = useParams();
    const location = useLocation();
    return(
        <>
        <h1>Logado como {name }</h1>
        <h3>path: {location.pathname}</h3>
 
        <Outlet />
        </>
    );
}