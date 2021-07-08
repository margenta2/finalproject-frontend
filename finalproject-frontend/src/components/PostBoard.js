import React, { Component } from "react"
import axios from "axios"
import { Link } from "react-router-dom"

class PostBoard extends Component {
    constructor(props) {
        super()

        this.state= {
            posts: []
        }
    }

    componentDidMount = () => {
        axios.get("http://localhost:3001/posts/all")
        .then(response => {
            console.log(response)
            this.setState({
                posts: response.data
            })
        })
    }

    render() {
        console.log(this.state.posts)
        return (
            <div>
                <h1>Message Board</h1>
                <Link to={`posts/create`}>Create New Post</Link>
                {this.state.posts.map(post => {
                    return (
                        <div>
                            <Link to={`/posts/post/${post.id}`}>
                                <div>
                                    <h4>{post.subject}</h4>
                                    <p>{post.content}</p>
                                </div>
                            </Link>
                        </div>
                    )
                })}
            </div>
        )
    }
}

export default PostBoard;