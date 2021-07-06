import React, {Component} from "react";
import {Link} from "react-router-dom";
import axios from "axios";

class SignUp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: {
                username: "",
                password: "",
                email:"",
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
                console.log(response)
                this.props.history.push(`/profile/${response.data.id}`)
            })
    }

    render() {
        return(
            <div>
                <h2>Sign Up</h2>
                <form onSubmit={this.handleSubmit}>
                    <input onChange={this.handleChange} type="text" name="username" placeholder="Enter Username"/>
                    <input onChange={this.handleChange} type="password" name="password" placeholder="Enter Password"/>
                    <input onChange={this.handleChange} type="text" name="email" placeholder="Enter Email" />
                    <input onChange={this.handleChange} type="text" name="jwStatus" placeholder="Enter JW Status" />
                    <textarea onChange={this.handleChange} rows="5" cols="40" name="topic" placeholder="Enter Topics Here"></textarea>
                    <input type="submit" value="Sign Up" />
                </form>
            </div>
        )
    }
}

export default SignUp