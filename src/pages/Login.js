import React, { useState } from 'react'
import { useHistory } from "react-router-dom";
import { Link } from 'react-router-dom'
import "../App.css"


const Login = (props) => {

    const history = useHistory();

    const url = "https://big-bookshelf.herokuapp.com"

    // const url = "http://localhost:8000"

    const [formData, setFormData] = useState({
        username: "",
        password: ""
    })

    const handleChange = (event) => {
        setFormData({...formData, [event.target.name] : event.target.value })
    }
    
    // login in user
    const login = (credentials) => {
        fetch(url + "/user/login", {
            method: "post",
            headers: {
            "Content-Type": "application/json",
            },
            body: JSON.stringify(credentials)
        }).then((response) => response.json())
        .then(responseJson => {
            if (Object.keys(responseJson)[0] === "response"){
                history.push("/home")
            } else {
                alert("Wrong username or password combination")
            }
        })
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        login(formData)
    }

    return (
        <div className="login-screen">
            <div className="login-header">
                <Link to="/">
                    <i class="fas fa-arrow-circle-left fa-2x" style={{color: "gray"}} ></i>
                </Link>
                <h1 className="app-title">Welcome Back!</h1>
            </div>
            <form className="login-form" onSubmit={handleSubmit}>
                <label className="login-label" for='username'>Username:</label>
                <input type='text' name='username' id='username' onChange={handleChange} />
                <br />
                <label className="login-label" for='password'>Password:</label>
                <input type='password' name='password' id='password' onChange={handleChange} />
                <br />
                <input className="login-button" type='submit' value='Login' style={{alignSelf: "center"}} />
            </form>
        </div>
    )
}

export default Login