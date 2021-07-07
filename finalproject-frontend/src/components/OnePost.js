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

        axios.put(`http://localhost:3001/posts/${this.props.match.params.id}`)
        .then(response => {
            console.log("editing")
        })
    }

    handleDelete = (event) => {
        event.preventDefault()

        axios.delete(`http://localhost:3001/posts/${this.props.match.params.id}`)
        .then(() => {
            console.log("deleting post");
            this.props.history.push('/posts')
        })
    }

    render() {
        const post = this.post.city
        return (
            <div>
                <h5>{post.subject}</h5>
                <p>{post.content}</p>
                <EditPost
                post={post}
                handleChange={this.handleChange}
                handleSubmit={this.handleSubmit}
                handleDelete={this.handleDelete}
                />
            </div>
        )
    }
}

export default OnePost