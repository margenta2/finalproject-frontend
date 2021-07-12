import React from "react";
import {Link, Route } from "react-router-dom";

const Home = () => {
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
            <div>
                <h1>Welcome to the XRC!</h1>
                <h4>Ex-Jehovah's Witness Resource Center</h4>
            </div>

            <div>
                <Link to="/login"><h3>Log In</h3></Link>
                <Link to="/signup"><h3>Sign Up</h3></Link>
                <Link to="/posts"><h3>Message Board</h3></Link>
            </div>
        </div>
    )
}

export default Home