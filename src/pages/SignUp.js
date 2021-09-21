import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useHistory } from "react-router-dom";
import "../App.css"

const SignUp = (props) => {

    const history = useHistory();

    const url = "https://big-bookshelf.herokuapp.com"

    const [formData, setFormData] = useState({
        first_name: "",
        last_name: "",
        username: "",
        password: ""
    })

    const handleChange = (event) => {
        setFormData({...formData, [event.target.name] : event.target.value })
    }

    //sign up user
    const signUp = (credentials) => {
        fetch(url + "/user/signup", {
        method: "post",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(credentials)
        }).then((response) => response.json())
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        signUp(formData)
        history.push("/login")
    }

    return (
        <div className="signup-screen">
            <div className="signup-block">
                <div className="signup-header">
                    <Link to="/">
                        <i class="fas fa-arrow-circle-left fa-2x" style={{color: "gray"}} ></i>
                    </Link>
                    <h1 className="app-title">Create Account</h1>
                </div>
                <form onSubmit={handleSubmit}>
                    <label className="login-label" for='first_name'>First Name:</label>
                    <input type='text' name='first_name' id='first_name' onChange={handleChange} />
                    <br />
                    <label className="login-label" for='last_name'>Last Name:</label>
                    <input type='text' name='last_name' id='last_name' onChange={handleChange} />
                    <br />
                    <label className="login-label" for='username'>username:</label>
                    <input type='text' name='username' id='username' onChange={handleChange} />
                    <br />
                    <label className="login-label" for='password'>password:</label>
                    <input type='password' name='password' id='password' onChange={handleChange} />
                    <br />
                    <input className="signup-button" type='submit' value='Register' style={{alignSelf: "center"}}/>
                </form>
            </div>
        </div>
    )
};

export default SignUp