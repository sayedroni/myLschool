import React from 'react';
import { NavLink } from 'react-router-dom';
import './notfound.css'

const Notfound = () => {
    return (
        <div className="notfound">
            <h2>Page not found....</h2>
            <h1>404</h1>
            <NavLink className="back" to="/home"activeStyle={{color:"blue"}}>Back Home</NavLink>
        </div>
        
    );
};

export default Notfound;