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
                console.log(response)
                this.props.history.push(`/profile/${response.data.id}`)
            })
            .catch(err => {
                console.log(err)
                alert("Wrong Username or Password. Try Again")
            })
    }

    render() {
        return (
            <div>
                <h1>Log In</h1>
                <form onSubmit={this.handleSubmit}>
                    <input onChange={this.handleChange} type="text" name="username" placeholder="Enter Username" />
                    <input onChange={this.handleChange} type="password" name="password" placeholder="Enter Password" />
                    <input type="submit" value="Log In" />

                </form>
            </div>
        )
    }
}

export default Login;