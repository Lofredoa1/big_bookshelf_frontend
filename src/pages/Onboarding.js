import React from 'react'
import { Link } from 'react-router-dom'
import "../App.css"
import logo from "../bookshelf-logo.png"

const Onboarding = (props) => {
    return <>
        <img src={logo} alt="logo"></img>
        <h1 className="app-title">Big Bookshelf</h1>
        <h3 className="welcome">Connecting readers one book at a time</h3>
        <div className="onboarding-buttons">
            <Link to="/signup">
                <button className="onboarding-button">Sign up</button>
            </Link>
            <Link to="/login">
                <button className="onboarding-button">Login in</button>
            </Link>
        </div>
    </>
};

export default Onboarding