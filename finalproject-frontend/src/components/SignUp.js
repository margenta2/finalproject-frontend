import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

class SignUp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: {
                username: "",
                password: "",
                email: "",
                jwStatus: "",
                topic: "",
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

        axios.post("http://localhost:3001/users/signup", this.state.user)
            .then(response => {
                this.props.history.push(`/profile/${response.data.id}`)
            })
    }

    render() {
        return (
            <div>
                <div className="navbar">
                    <Link to="/">Home</Link>
                    <Link to="/login">Log In</Link>
                </div>

                <div className="signup-body">
                    <div className="signup-form">
                        <h2>Sign Up</h2>
                        <form onSubmit={this.handleSubmit}>
                            <label>Username: </label><br></br>
                            <input onChange={this.handleChange} type="text" name="username" placeholder="Enter Username" /> <br></br>
                            <label>Password: </label><br></br>
                            <input onChange={this.handleChange} type="password" name="password" placeholder="Enter Password" /><br></br>
                            <label>Email Address: </label><br></br>
                            <input onChange={this.handleChange} type="text" name="email" placeholder="Enter Email" /><br></br>
                            <label>Current Jehovah's Witness Status: </label><br></br>
                            <input onChange={this.handleChange} type="text" name="jwStatus" placeholder="Enter JW Status" /><br></br>
                            <label>Topics That Interest You: </label><br></br>
                            <textarea onChange={this.handleChange} rows="5" cols="40" name="topic" placeholder="Enter Topics Here"></textarea><br></br>
                            <input type="submit" value="Sign Up" />
                        </form>

                    </div>
                </div>
            </div>
        )
    }
}

export default SignUp