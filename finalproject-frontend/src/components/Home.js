import React from "react";
import {Link, Route } from "react-router-dom";

const Home = () => {
    return (
        <div>
            <div>
                <h1>Welcome to the XRC!</h1>
                <h4>Ex-Jehovah's Witness Resource Center</h4>
            </div>

            <div>
                <Link to="/login"><h3>Log In</h3></Link>
                <Link to="/signup"><h3>Sign Up</h3></Link>
            </div>
        </div>
    )
}

export default Home