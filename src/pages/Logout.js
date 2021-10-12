import React from "react";
import { Link } from "react-router-dom";

const Logout = () => {
    return (
        <>
            <h1>User successfully logged out</h1>
            <Link to="/">
                        <button className="onboarding-button">Main Page</button>
            </Link>
        </>
    )
}

export default Logout