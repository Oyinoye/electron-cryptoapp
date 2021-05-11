import React from 'react';
import { BrowserRouter, Link } from 'react-router-dom';
import './Nav.css';


function Nav() {
    return (
        <BrowserRouter>
        <div className="main__nav">
            <div className="nav__logo">
                {/* <img src="" alt="logo"></img> */}
            </div>
            <div className="nav__links">
                <li className="nav__link active">Home</li>
                <li className="nav__link">Assets</li>
                <li className="nav__link">Apps</li>
                <li className="nav__link">Devices</li>
                <li className="nav__link">Security</li>
                <li className="nav__link">Backup</li>
                <li className="nav__link">Personalize</li>
            </div>
            <div className="nav__icons">
            </div>
        </div>
        </BrowserRouter>
    )
}

export default Nav
