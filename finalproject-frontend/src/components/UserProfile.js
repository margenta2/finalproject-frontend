import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import EditProfile from "./EditProfile";


class UserProfile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: {
                username: "",
                password: "",
                email: "",
                jwStatus: "",
                topic: ""
            }
        }
    }

    componentDidMount = () => {
        axios.get(`http://localhost:3001/users/profile/${this.props.match.params.id}`)
        .then(response => {
            console.log(response)
            this.setState({
                user: response.data.user
            })
        })
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

        axios.put(`http://localhost:3001/users/profile/${this.props.match.params.id}`,this.state.user)
            .then(response => 
                console.log("Making Changes"))
    }

    handleDelete = async (event) => {
        await axios.delete(`http://localhost:3001/users/profile/${this.props.match.params.id}`)
            .then(response => {
                console.log("deleting user")
                this.props.history.push('/')
            })
    }

    render() {
        const user = this.state.user;

        return (
            <div>
                <div>Navigation</div>
                <h1>Profile</h1>
                <form>
                    <h2>Username: {user.username}</h2>
                    <h2>Password: {user.password}</h2>
                    <h2>Email: {user.email}</h2>
                    <h2>JW Status: {user.jwStatus}</h2>
                    <h2>Topic to Discuss: {user.topic}</h2>
                </form>
                <div>
                    <EditProfile
                    user={this.state.user}
                    handleChange={this.handleChange}
                    handleSubmit={this.handleSubmit}
                    handleDelete={this.handleDelete}
                    />
                </div>
            </div>
        )
    }
}

export default UserProfile;