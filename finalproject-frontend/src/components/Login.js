import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: {
                username: "",
                password: ""
            }
        }
    }

    handleChange = (event) => {
        this.setState(prevState => ({
            user: {
                ...prevState.user,
                [event.target.name]: event.target.value
            }
        }))
    }

    handleSubmit = (event) => {
        event.preventDefault()

        axios.post("http://localhost:3001/users/login", this.state.user)
            .then(response => {
                this.props.history.push(`/profile/${response.data.id}`)
            })
            .catch(err => {
                console.log(err)
                alert("Wrong Username or Password. Try Again")
            })
    }

    render() {
        return (
            <div className="login-page">
                <div  className="navbar">
                <Link to="/">Home</Link>
                <Link to="/signup">Sign Up</Link> 
                </div>

                <div className="login-body">
                    <div className="login-form">
                        <h1>Log In</h1>
                        <form onSubmit={this.handleSubmit}>
                            <label>Username </label>
                            <input onChange={this.handleChange} type="text" name="username" placeholder="Enter Username" /> <br></br><br></br>
                            <label>Password </label>
                            <input onChange={this.handleChange} type="password" name="password" placeholder="Enter Password" />
                            <input type="submit" value="Log In" />
                        </form>
                    </div>
                </div>
                
            </div>
        )
    }
}

export default Login;