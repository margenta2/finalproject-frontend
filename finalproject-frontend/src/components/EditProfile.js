import React from "react";
import {Link} from "react-router-dom";

const EditProfile = (props) => {
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
                        <Link to="/statistics">Statistics</Link>
                        <Link to="/glossary">Glossary of Terms</Link>
                    </div>
                </div>
            </div>
            <form onSubmit={props.handleSubmit}>
                <input onChange={props.handleChange} type="text" name="username" value={props.user.username} />
                <input onChange={props.handleChange} type="password" name="password" value={props.user.password} />
                <input onChange={props.handleChange} type="text" name="email" value={props.user.email} />
                <input onChange={props.handleChange} type="text" name="jwStatus" value={props.user.jwStatus} />
                <input onChange={props.handleChange} type="text" name="topic" value={props.user.topic} />
                <input type="submit" value="Submit" />
            </form>
            <button onClick={props.handleDelete}>Delete Profile</button>
        </div>
    )
}

export default EditProfile;