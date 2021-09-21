import React, { useState } from 'react'
import { useHistory } from "react-router-dom";
import { Link } from 'react-router-dom'
import "../App.css"


const Login = (props) => {

    const history = useHistory();

    const url = "https://big-bookshelf.herokuapp.com"

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
    }

    const thisbutton = () => {
        fetch( url + "/posts/getuserposts")
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        login(formData)
        // props.getMyPosts()
        history.push("/home")
    }

  
    return (
        <div className="login-screen">
            <div className="login-block">
                <div className="login-header">
                    <Link to="/">
                        <i class="fas fa-arrow-circle-left fa-2x" style={{color: "gray"}} ></i>
                    </Link>
                <h1 className="app-title">Welcome Back!</h1>
                </div>
                <form onSubmit={handleSubmit}>
                    <label className="login-label" for='username'>username:</label>
                    <input type='text' name='username' id='username' onChange={handleChange} />
                    <br />
                    <label className="login-label" for='password'>password:</label>
                    <input type='password' name='password' id='password' onChange={handleChange} />
                    <br />
                    <input className="login-button" type='submit' value='Login' style={{alignSelf: "center"}} />
                    <button onClick={thisbutton}>Click This</button>
                </form>
            </div>
        </div>
    )
}

export default Login