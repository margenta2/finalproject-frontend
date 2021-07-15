import React from "react";
import {Link} from "react-router-dom";

const EditPost = (props) => {
    return (
        <div>
            <div  className="navbar">
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
            <form onSubmit={props.handleSubmit}>
                <input onChange={props.handleChange} type="text" name="subject" value={props.post.subject}/>
                <input onChange={props.handleChange} type="text" name="content" value={props.post.content}/>
                <input type="submit" value="Edit Post"/>
            </form>
            <button onClick={props.handleDelete}>Delete Post</button>
        </div>
        
    )
}

export default EditPost;