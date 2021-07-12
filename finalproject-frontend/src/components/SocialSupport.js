import React from "react";
import {Link, Route} from "react-router-dom";

const SocialSupport = () => {
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
            <h1>Social Support</h1>
            <ul>
                <li>MeetUp</li>
                <li>Reddit</li>
                <li>Facebook Support Groups</li>
            </ul>
        </div>
    )
}

export default SocialSupport;