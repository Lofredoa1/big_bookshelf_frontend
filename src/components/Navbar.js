import React from 'react';
import { Link } from 'react-router-dom';
import "../App.css";
import logo from "../BB.png"

const Navbar = (props) => {

    return (
        <div className="navbar">
            <div className="header-container">
                <img src={logo} alt="BB logo"></img>
                <Link to="/home">
                    <p className="nav-headers">Home</p>
                </Link>
                <Link to="/post">
                    <p className="nav-headers">Blog</p>
                </Link>
                <Link to="/myprofile">
                    <p className="nav-headers">My Profile</p>
                </Link>
                <Link to="/about">
                    <p className="nav-headers">About</p>
                </Link>
                <Link to="/logout">
                    <p className="nav-headers">Logout</p>
                </Link>  
            </div>
        </div>
    )
};

export default Navbar