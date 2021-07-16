import React, {Component} from "react";
import {Link} from "react-router-dom";
import axios from "axios";
import EditPost from "./EditPost";

class OnePost extends Component {
    constructor(props) {
        super(props);
        this.state = {
            post: {
                subject: "",
                content: ""
            }
        }
    }

    componentDidMount = () => {
        axios.get(`http://localhost:3001/posts/${this.props.match.params.id}`)
            .then(response => {
                this.setState({
                    post: response.data
                })
            })
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

        axios.put(`http://localhost:3001/posts/${this.props.match.params.id}`, this.state.post)
            .then(response => {
                this.props.history.push(`/posts`)
            })
    }

    handleDelete = async (event) => {
        event.preventDefault()

        await axios.delete(`http://localhost:3001/posts/${this.props.match.params.id}`)
            .then(response => {
                this.props.history.push(`/posts`)
            })
    }

    render() {
        const post = this.state.post
        return (
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
                <div className="onepost-body">
                    <div className="onepost-content">
                        <h3>{post.subject}</h3>
                        <p>{post.content}</p>
                        <EditPost
                            post={post}
                            handleChange={this.handleChange}
                            handleSubmit={this.handleSubmit}
                            handleDelete={this.handleDelete}
                        />
                    </div>
                </div>
            </div>
        )
    }
}

export default OnePost;