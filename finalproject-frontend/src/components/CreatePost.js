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
                this.props.history.push(`/posts`)
            })
    }

    render() {
        return(
            <div>
                <div className="navbar">
                    <Link to="/">Home</Link>
                    <Link to="/posts">Message Board</Link>
                    <div className="dropdown">
                        <button className="dropbtn">Menu
                            <i className="fa fa-caret-down"></i>
                        </button>
                        <div className="dropdown-content">
                            <Link to="/about">About</Link>
                            <Link to="/beliefs">Beliefs</Link>
                            <Link to="/deprogram">De-Programming</Link>
                            <Link to="/mentalhealth">Mental Health</Link>
                            <Link to="/socialsupport">Social Support</Link>
                            <Link to="/humor">Humor</Link>
                            <Link to="/glossary">Glossary of Terms</Link>
                        </div>
                    </div>
                </div>
                <div className="create-body">
                    <div className="create-form">
                        <h2>Create Post</h2>
                        <p>Which topics would you like more information on?</p>
                        <form onSubmit={this.handleSubmit}>
                            <label>Title</label> <br></br>
                            <input onChange={this.handleChange} type="text" name="subject" /> <br></br>
                            <label>Topic</label><br></br>
                            <textarea onChange={this.handleChange} rows="5" cols="40" name="content" /><br></br>
                            <input type="submit" value="Post" />
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default CreatePost;