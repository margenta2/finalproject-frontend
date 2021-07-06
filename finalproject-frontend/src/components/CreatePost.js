import React, { Component } from "react";
import {Link} from "react-router-dom";
import axios from "axios";

class CreatePost extends Component {
    constructor(props) {
        super(props);
        this.state = {
            post: {
                subject: "",
                content: ""
            }
        }
    }

    handleChange = (event) => {
        this.setState(prevState => ({
            post: {
                ...prevState.post,
                [event.target.name]: event.target.value
            }
        }))
    }

    handleSubmit = (event) => {
        event.preventDefault()

        axios.post('http://localhost:3001/posts/create', this.state.post)
            .then(response => {
                console.log(response)
                this.props.history.push(`/posts/${response.data.id}`)
            })
    }

    render() {
        return(
            <div>
                <h2>Create Post</h2>
                <p>Which topics would you like more information on?</p>
                <form onSubmit={this.handleSubmit}>
                    <input onChange={this.handleChange} type="text" name="subject"/>
                    <input onChange={this.handleChange} type="text" name="content"/>
                    <input type="submit" value="Post" />
                </form>
            </div>
        )
    }
}

export default CreatePost;